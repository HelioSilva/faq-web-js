import { Router, Request, Response } from "express";
import { Connection, FindOperator, FindOperatorType, Raw } from "typeorm";
import { getRepository, Like } from "typeorm";
import { DTOItemQuestion, ItemQuestion } from "../entity/ItemQuestion";
import { DTOQuestion, Question } from "../entity/Question";
import CreateItemQuestion from "../services/questions/createItemQuestion";
import CreateQuestion from "../services/questions/createQuestion";
import UpdateItemQuestion from "../services/questions/updateItemQuestion";
import UpdateQuestion from "../services/questions/updateQuestion";

const questionsRouter = Router();

questionsRouter.get("/", async (request: Request, response: Response) => {
  const repositoryQuestion = getRepository(Question);
  const questionsAll = await repositoryQuestion.find({
    cache: false,
    order: { acessos: "DESC", createdAt: "ASC" },
    skip: 0,
    take: 10,
  });

  response.status(200).json({
    questions: questionsAll,
  });
});

questionsRouter.get(
  "/myquestions/:user",
  async (request: Request, response: Response) => {
    const repositoryQuestion = getRepository(Question);
    const questionsAll = await repositoryQuestion.find({
      where: {
        autor_id: request.params.user,
      },

      order: { acessos: "DESC", createdAt: "ASC" },
    });

    response.status(200).json({
      questions: questionsAll,
    });
  }
);

questionsRouter.get(
  "/myanswers/:user",
  async (request: Request, response: Response) => {
    const repositoryQuestion = getRepository(Question);

    const questionsAll = await repositoryQuestion
      .createQueryBuilder("question")
      .leftJoinAndSelect("question.answers", "ItemQuestion")
      .where("ItemQuestion.autor_id = :autor", {
        autor: request.params.user,
      })
      .getMany();

    response.status(200).json({
      questions: questionsAll,
    });
  }
);

questionsRouter.get(
  "/search/:text",
  async (request: Request, response: Response) => {
    const repositoryQuestion = getRepository(Question);
    const questionsAll = await repositoryQuestion.find({
      where: {
        titulo: Raw(
          (alias) =>
            `LOWER(${alias}) LIKE '%${request.params.text.toLowerCase()}%'`
        ),
      },

      order: { acessos: "DESC", createdAt: "ASC" },
    });

    response.status(200).json({
      questions: questionsAll,
    });
  }
);

questionsRouter.get("/:id", async (request: Request, response: Response) => {
  const repositoryQuestion = getRepository(Question);
  const question = await repositoryQuestion.find({
    where: {
      id: request.params.id,
    },
    cache: false,
  });

  response.status(200).json({
    questions: question,
  });
});

questionsRouter.post("/", async (request: Request, response: Response) => {
  const dados: DTOQuestion = request.body;
  const classCreateQuestion = new CreateQuestion(dados);
  const questionCreated = await classCreateQuestion.execute();

  response.status(200).json(questionCreated);
});

questionsRouter.post(
  "/:id/answer",
  async (request: Request, response: Response) => {
    const repository = getRepository(Question);
    const findQuestion = await repository.findOne({
      where: {
        id: request.params.id,
      },
    });

    if (!findQuestion)
      return response.status(404).json({ response: "Question not found" });

    const dados: DTOItemQuestion = request.body;
    const classCreateItemQuestion = new CreateItemQuestion(
      dados,
      findQuestion.id
    );
    const itemQuestionCreate = await classCreateItemQuestion.execute();

    return response.status(200).json(itemQuestionCreate);
  }
);

questionsRouter.put(
  "/answer/:id",
  async (request: Request, response: Response) => {
    const repository = getRepository(ItemQuestion);
    const findAnswer = await repository.findOne({
      where: {
        id: request.params.id,
      },
    });

    if (!findAnswer)
      return response.status(404).json({ response: "Answer not found" });

    const dados: DTOItemQuestion = request.body;
    const classUpdateItemQuestion = new UpdateItemQuestion(
      dados,
      findAnswer.id
    );
    const itemQuestionUpdate = await classUpdateItemQuestion.execute();

    return response.status(200).json(itemQuestionUpdate);
  }
);

questionsRouter.delete(
  "/answer/:id",
  async (request: Request, response: Response) => {
    const repository = getRepository(ItemQuestion);
    const findAnswer = await repository.findOne({
      where: {
        id: request.params.id,
      },
    });

    if (!findAnswer)
      return response.status(404).json({ response: "Answer not found" });

    const del = await repository.delete(findAnswer.id);

    if (del.affected) {
      return response.status(200).json({});
    } else {
      return response.status(500).json({ message: "erro" });
    }
  }
);

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
          autor_id: findQuestion.autor_id,
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
