import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Question } from "../entity/Question";
import CreateQuestion from "../services/createQuestion";

const questionsRouter = Router();

questionsRouter.get("/", async (request: Request, response: Response) => {
  const repositoryQuestion = getRepository(Question);
  const questionsAll = await repositoryQuestion.find({ cache: false });

  response.status(200).json({
    questions: questionsAll,
  });
});

questionsRouter.post("/", async (request: Request, response: Response) => {
  const { titulo, autor, acessos } = request.body;
  const classCreateQuestion = new CreateQuestion();
  const questionCreated = await classCreateQuestion.execute();

  response.status(200).json(questionCreated);
});

export default questionsRouter;
