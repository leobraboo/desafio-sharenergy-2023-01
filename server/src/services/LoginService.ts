import { ILogin } from "../interfaces/Loginterfaces";
import { LoginRepository } from "../repository/LoginRepository";
import jwt from 'jsonwebtoken'


export class LoginService {
  #LoginRepository: LoginRepository
  constructor(LoginRepository: LoginRepository) {
    this.#LoginRepository = LoginRepository
  }

  async create(data: ILogin): Promise<ILogin> {

    const userExist = await this.#LoginRepository.userExist(data.email)
    if(userExist) {
      throw new Error("Email já existente") 
    }

    const result = await this.#LoginRepository.create(data)

    return result._id;
  }

  async login(data: ILogin): Promise<String> {
    const result = await this.#LoginRepository.login(data)
    if (!result) {
      throw new Error("Usuário não encontrado")
    }

    const token = jwt.sign({ result }, "wdwdijwdjwdwidjwidijw")
    return token
  }
}