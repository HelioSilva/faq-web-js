import { DTOQuestion, Question } from "../../entity/Question";
import ServicesAbstractQuestion from "../abstractService";
import { getRepository } from "typeorm";

class CreateQuestion extends ServicesAbstractQuestion<Question> {
  private DTOData: DTOQuestion;
  constructor(dadosRequest: DTOQuestion) {
    super();
    this.DTOData = dadosRequest;
  }
  async execute(): Promise<Question> {
    const repository = getRepository(Question);

    return await repository.save(this.DTOData);
  }
}

export default CreateQuestion;
