import { DTOUsers, User } from "../../entity/users";
import { getRepository } from "typeorm";
import { hash, compare } from "bcryptjs";

class LoginUser {
  private DTOData: DTOUsers;
  constructor(dadosRequest: DTOUsers) {
    this.DTOData = dadosRequest;
  }
  async execute(): Promise<User> {
    const repository = getRepository(User);

    const dadosUser = await repository.findOne({
      where: {
        email: this.DTOData.email,
      },
    });

    if (dadosUser == undefined) return {} as User;

    const comparePass = await compare(
      this.DTOData.password,
      dadosUser.getPassword()
    );

    if (!comparePass) return {} as User;

    return dadosUser;
  }
}

export default LoginUser;
