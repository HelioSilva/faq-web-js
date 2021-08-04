import { Router, Request, Response, request, NextFunction } from "express";
import { getRepository } from "typeorm";
import { DTOUsers, User } from "../entity/Users";
import { upload } from "../services/multer";
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
      dados.url_image = request.file.path;
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
  (request: Request, resp: Response, next: NextFunction) => {
    console.info("Retorno antes", request.body);
    next();
  },
  upload.single("img"),
  (request: Request, resp: Response, next: NextFunction) => {
    console.info("retorno depois", request.body);
    next();
  },
  async (request: Request, response: Response) => {
    const dados: DTOUsers = request.body;
    const repository = getRepository(User);
    const findUser = await repository.findOne({
      where: {
        email: dados.email,
      },
    });

    if (!findUser) {
      response.status(404).json({ response: "User not found" });
    } else {
      try {
        if (request.file && request.file.path) {
          dados.url_image = request.file.path;
        }

        console.log(findUser);
        const resp = await repository.update(findUser.id, {
          ...dados,
        });
        console.log(resp);

        response
          .status(200)
          .json({ updated: true, message: "Dados atualizados com sucesso!" });
      } catch (e) {
        response.status(200).json({ updated: false, message: e.detail });
      }
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
