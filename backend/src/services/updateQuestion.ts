import { Question } from "../entity/Question";
import ServicesAbstractQuestion from "./abstractService";
import { getRepository } from "typeorm";

class UpdateQuestion extends ServicesAbstractQuestion {
  async execute(): Promise<Question> {
    const repository = getRepository(Question);

    const newQuestion = await repository.findOne(
      "2a13c36b-513e-4f7c-993d-04bf0b628703"
    );

    if (newQuestion) {
      newQuestion.titulo = "Update Nova postagem";
      newQuestion.autor = "Helio Silva";
      newQuestion.acessos = 25;
      return await repository.save(newQuestion);
    } else {
      return new Question();
    }
  }
}

export default UpdateQuestion;
