import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { DTOUsers, User } from "../entity/Users";
import CreateUser from "../services/users/createUser";

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
  const UserCreated = await classCreateUser.execute();

  response.status(200).json(UserCreated);
});

export default usersRouter;
