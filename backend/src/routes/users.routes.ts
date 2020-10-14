import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { DTOUsers, User } from "../entity/Users";
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

usersRouter.post("/", async (request: Request, response: Response) => {
  const dados: DTOUsers = request.body;
  const classCreateUser = new CreateUser(dados);

  try {
    const UserCreated = await classCreateUser.execute();
    response.status(200).json({ created: true, message: UserCreated });
  } catch (e) {
    response.status(200).json({ created: false, message: e.detail });
  }
});

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
