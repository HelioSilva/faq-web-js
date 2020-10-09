import { DTOUsers, User } from "../../entity/Users";
import { getRepository } from "typeorm";
import { hash, compare } from "bcryptjs";

class LoginUser {
  private DTOData: DTOUsers;
  constructor(dadosRequest: DTOUsers) {
    this.DTOData = dadosRequest;
  }
  async execute(): Promise<Boolean> {
    const repository = getRepository(User);

    const dadosUser = await repository.findOne({
      where: {
        email: this.DTOData.email,
      },
    });

    if (!dadosUser) return false;

    console.log(dadosUser.getPassword());

    return await compare(this.DTOData.password, dadosUser.getPassword());
  }
}

export default LoginUser;
