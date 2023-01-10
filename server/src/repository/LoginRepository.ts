import { ILogin } from "../interfaces/Loginterfaces";
import { LoginModel } from "../models/login";

export class LoginRepository {
  #LoginModel: typeof LoginModel
  constructor(LoginModel: typeof LoginModel) {
    this.#LoginModel = LoginModel
  }
  async create(data: ILogin): Promise<ILogin> {
    const newUser = await this.#LoginModel.create(data);
    return newUser;
  }
}
