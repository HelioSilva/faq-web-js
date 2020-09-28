import { Question } from "../entity/Question";
import ServicesAbstractQuestion from "./abstractService";
import { getRepository } from "typeorm";

class CreateQuestion extends ServicesAbstractQuestion {
  async execute(): Promise<Question> {
    const repository = getRepository(Question);

    const newQuestion = new Question();
    newQuestion.titulo = "Nova postagem";
    newQuestion.autor = "Helio Silva";
    newQuestion.acessos = 25;

    return await repository.save(newQuestion);
  }
}

export default CreateQuestion;
