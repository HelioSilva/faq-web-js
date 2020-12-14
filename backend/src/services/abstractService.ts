import { Question } from "../entity/question";

abstract class ServicesAbstractQuestion<T> {
  abstract execute(): Promise<T>;
}

export default ServicesAbstractQuestion;
