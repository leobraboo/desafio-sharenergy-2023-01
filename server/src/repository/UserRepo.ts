import { IUser } from "../interfaces/UserInterfaces";
import { UserModel } from "../models/user";

export class UserRepository {
  #userModel: typeof UserModel
  constructor(userModel: typeof UserModel) {
    this.#userModel = userModel
  }
  async create(data: IUser): Promise<IUser> {
    const newUser = await this.#userModel.create(data);
    return newUser;
  }

  async findAll(): Promise<IUser[]> {
    const findUser = await this.#userModel.find()
    return findUser;
    

  }

  async delete(id: string): Promise<void> {
    await this.#userModel.findByIdAndDelete(id);
  }

  async update(data: IUser, id: string): Promise<void> {
    await this.#userModel.findByIdAndUpdate(id, data);
  }
}