import { DTOItemQuestion, ItemQuestion } from "../../entity/ItemQuestion";
import ServicesAbstractQuestion from "../abstractService";
import { getRepository } from "typeorm";

class UpdateItemQuestion extends ServicesAbstractQuestion<ItemQuestion> {
  id: string;
  data: DTOItemQuestion;
  private DTOData: DTOItemQuestion;
  constructor(dadosRequest: DTOItemQuestion, idAnswer: string) {
    super();
    this.id = idAnswer;
    this.data = dadosRequest;
  }
  async execute(): Promise<ItemQuestion> {
    const repository = getRepository(ItemQuestion);
    const itemQuestionFind = await repository.findOne({
      where: { id: this.id },
    });

    if (itemQuestionFind) {
      await repository.update(this.id, this.data);
      const itemQuestionUpdated = await repository.findOne({
        where: { id: this.id },
      });

      return itemQuestionUpdated ? itemQuestionUpdated : new ItemQuestion();
    } else {
      return new ItemQuestion();
    }
  }
}

export default UpdateItemQuestion;
