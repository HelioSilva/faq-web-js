import { DTOQuestion, Question } from "../../entity/Question";
import ServicesAbstractQuestion from "../abstractService";
import { getRepository } from "typeorm";

class UpdateQuestion extends ServicesAbstractQuestion {
  id: string;
  data: DTOQuestion;
  constructor(id: string, data: DTOQuestion) {
    super();
    this.id = id;
    this.data = data;
  }
  async execute(): Promise<Question> {
    const repository = getRepository(Question);
    const questionFind = await repository.findOne({ where: { id: this.id } });

    if (questionFind) {
      await repository.update(this.id, this.data);
      const questionUpdated = await repository.findOne({
        where: { id: this.id },
      });

      return questionUpdated ? questionUpdated : new Question();
    } else {
      return new Question();
    }
  }
}

export default UpdateQuestion;
