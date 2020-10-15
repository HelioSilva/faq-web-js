import { DTOItemQuestion, ItemQuestion } from "../../entity/ItemQuestion";
import ServicesAbstractQuestion from "../abstractService";
import { getRepository } from "typeorm";

class CreateItemQuestion extends ServicesAbstractQuestion<ItemQuestion> {
  private DTOData: DTOItemQuestion;
  constructor(dadosRequest: DTOItemQuestion, idQuestion: string) {
    super();
    this.DTOData = dadosRequest;
    this.DTOData.question_id = idQuestion;
  }
  async execute(): Promise<ItemQuestion> {
    const repository = getRepository(ItemQuestion);

    return await repository.save(this.DTOData);
  }
}

export default CreateItemQuestion;
