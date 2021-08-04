import { Question } from "../entity/Question";

abstract class ServicesAbstractQuestion<T> {
  abstract execute(): Promise<T>;
}

export default ServicesAbstractQuestion;
