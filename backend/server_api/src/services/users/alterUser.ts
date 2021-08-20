import { DTOUsers, User } from "../../entity/Users";
import { getRepository } from "typeorm";
import { hash } from "bcryptjs";

class AlterUser {
  private DTOData: DTOUsers;
  constructor(dadosRequest: DTOUsers) {
    this.DTOData = dadosRequest;
  }

  async execute(): Promise<User> {
    const repository = getRepository(User);
    const findUser = await repository.findOne({
      where: {
        email: this.DTOData.email,
      },
    });

    if (!findUser) {
      throw new Error("Usuario não encontrado");
    }

    try {
      this.DTOData.password = await hash(this.DTOData.password, 8);

      const response = await repository.update(findUser.id, {
        ...this.DTOData,
      });

      return findUser;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default AlterUser;
