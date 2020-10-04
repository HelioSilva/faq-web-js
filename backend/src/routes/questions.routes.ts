import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { DTOQuestion, Question } from "../entity/Question";
import CreateQuestion from "../services/createQuestion";
import UpdateQuestion from "../services/updateQuestion";

const questionsRouter = Router();

questionsRouter.get("/", async (request: Request, response: Response) => {
  const repositoryQuestion = getRepository(Question);
  const questionsAll = await repositoryQuestion.find({
    cache: false,
    order: { acessos: "DESC" },
  });

  response.status(200).json({
    questions: questionsAll,
  });
});

questionsRouter.post("/", async (request: Request, response: Response) => {
  const dados: DTOQuestion = request.body;
  const classCreateQuestion = new CreateQuestion(dados);
  const questionCreated = await classCreateQuestion.execute();

  response.status(200).json(questionCreated);
});

questionsRouter.post(
  "/:id/view",
  async (request: Request, response: Response) => {
    const repository = getRepository(Question);
    const findQuestion = await repository.findOne({
      where: {
        id: request.params.id,
      },
    });

    if (!findQuestion) {
      response.status(404).json({ response: "Question not found" });
    } else {
      let dto: DTOQuestion = findQuestion;

      const classUpdateQuestion = new UpdateQuestion(
        String(request.params.id),
        {
          acessos: findQuestion.acessos + 1,
          autor: findQuestion.autor,
          titulo: findQuestion.titulo,
        }
      );
      const questionCreated = await classUpdateQuestion.execute();
      return response.status(200).json({});
    }
  }
);

questionsRouter.put("/:id", async (request: Request, response: Response) => {
  const repository = getRepository(Question);
  const findQuestion = await repository.findOne({
    where: {
      id: request.params.id,
    },
  });

  if (!findQuestion)
    response.status(404).json({ response: "Question not found" });

  const requestQuestion: DTOQuestion = request.body;
  const classUpdateQuestion = new UpdateQuestion(
    String(request.params.id),
    requestQuestion
  );
  const questionCreated = await classUpdateQuestion.execute();

  response.status(200).json(questionCreated);
});

questionsRouter.delete("/:id", async (request: Request, response: Response) => {
  const repository = getRepository(Question);
  const findQuestion = await repository.findOne({
    where: {
      id: request.params.id,
    },
  });

  if (findQuestion) {
    await repository.remove(findQuestion);
    response.status(200).json({});
  } else {
    response.status(404).json({ response: "Question not found" });
  }
});

export default questionsRouter;
