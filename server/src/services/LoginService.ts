import { ILogin } from "../interfaces/Loginterfaces";
import { LoginRepository } from "../repository/LoginRepository";

export class LoginService {
  #LoginRepository: LoginRepository
  constructor(LoginRepository: LoginRepository) {
    this.#LoginRepository = LoginRepository
  }

  async create(data: ILogin): Promise<ILogin> {
    console.log(data)
    const result = await this.#LoginRepository.create(data)
    return result._id;
  }
}