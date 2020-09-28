import { Question } from "../entity/Question";
import ServicesAbstractQuestion from "./abstractService";
import { getRepository } from "typeorm";

class UpdateQuestion extends ServicesAbstractQuestion {
  id: string;
  constructor(id: string) {
    super();
    this.id = id;
  }
  async execute(): Promise<Question> {
    const repository = getRepository(Question);
    const newQuestion = await repository.findOne({ where: { id: this.id } });
    if (newQuestion) {
      newQuestion.titulo = "Update Nova postagem";
      newQuestion.autor = "Helio Silva";
      newQuestion.acessos = 25;
      await repository.update(this.id, newQuestion);
      return newQuestion;
    } else {
      return new Question();
    }
  }
}

export default UpdateQuestion;
