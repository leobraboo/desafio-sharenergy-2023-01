import { ILogin } from "../interfaces/Loginterfaces";
import { LoginModel } from "../models/login";

export class LoginRepository {
  #loginModel: typeof LoginModel
  constructor(loginModel:  typeof LoginModel) {
    this.#loginModel = loginModel
  }
  async create(data: ILogin): Promise<ILogin> {
    const newLogger = await this.#loginModel.create(data);
    return newLogger;
  }

  async login(data: ILogin): Promise<ILogin> {
  const { email } = data

  const login = await this.#loginModel.findOne({email});
  return login
  }

  async userExist(data: String): Promise<ILogin> {
    const email = data
  
    const login = await this.#loginModel.findOne({email});
    return login
    }
}
