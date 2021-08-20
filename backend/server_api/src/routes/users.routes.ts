import { Router, Request, Response, request, NextFunction } from "express";
import { getRepository } from "typeorm";
import { DTOUsers, User } from "../entity/Users";
import { saveS3 } from "../services/awsS3/awsS3";
import { upload } from "../services/multer";
import AlterUser from "../services/users/alterUser";
import CreateUser from "../services/users/createUser";
import LoginUser from "../services/users/loginUser";

const usersRouter = Router();

usersRouter.get("/", async (request: Request, response: Response) => {
  const repositoryUser = getRepository(User);
  const usersAll = await repositoryUser.find();

  response.status(200).json({
    users: usersAll,
  });
});

usersRouter.get("/:email", async (request: Request, response: Response) => {
  const repositoryUser = getRepository(User);
  const user = await repositoryUser.findOne({
    select: ["name", "email", "url_image", "createdAt", "updatedAt"],
    where: {
      email: request.params.email,
    },
    cache: false,
  });

  response.status(200).json({
    user,
  });
});

usersRouter.post(
  "/",
  upload.single("img"),
  async (request: Request, response: Response) => {
    const dados: DTOUsers = request.body;
    const classCreateUser = new CreateUser(dados);

    if (request.file && request.file.path) {
      const fileCloud = await saveS3(
        request.file.path,
        request.file.mimetype.toString()
      );
      dados.url_image = fileCloud.Location ? fileCloud.Location : "/user.png";
    }

    try {
      const UserCreated = await classCreateUser.execute();
      response.status(200).json({ created: true, message: UserCreated });
    } catch (e) {
      response.status(200).json({ created: false, message: e.detail });
    }
  }
);

usersRouter.put(
  "/",
  upload.single("img"),
  async (request: Request, response: Response) => {
    const dados: DTOUsers = request.body;

    const classAlterUser = new AlterUser(dados);

    if (request.file && request.file.path) {
      const fileCloud = await saveS3(
        request.file.path,
        request.file.mimetype.toString()
      );
      dados.url_image = fileCloud.Location ? fileCloud.Location : "/user.png";
    }

    try {
      const UserUpdated = await classAlterUser.execute();
      response.status(200).json({ created: true, message: UserUpdated });
    } catch (e) {
      response.status(200).json({ created: false, message: e.detail });
    }
  }
);

usersRouter.post("/login", async (request: Request, response: Response) => {
  const dados: DTOUsers = request.body;

  const classLoginUser = new LoginUser(dados);
  const userLogged = await classLoginUser.execute();

  userLogged.name
    ? response
        .status(200)
        .json({ acesso: true, message: "Login feito com sucesso", userLogged })
    : response
        .status(200)
        .json({ acesso: false, message: "Email ou Senha incorreto" });
});

export default usersRouter;
