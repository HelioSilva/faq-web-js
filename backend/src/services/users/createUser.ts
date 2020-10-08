import { DTOUsers, User } from "../../entity/Users";
import ServicesAbstractQuestion from "../abstractService";
import { getRepository } from "typeorm";

class CreateUser {
  private DTOData: DTOUsers;
  constructor(dadosRequest: DTOUsers) {
    //super();
    this.DTOData = dadosRequest;
  }
  async execute(): Promise<User> {
    const repository = getRepository(User);
    const createdUser = await repository.save(repository.create(this.DTOData));
    createdUser && delete createdUser.password;

    return createdUser;
  }
}

export default CreateUser;
