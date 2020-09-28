import { Question } from "../entity/Question";

abstract class ServicesAbstractQuestion {
  abstract execute(): Promise<Question>;
}

export default ServicesAbstractQuestion;
