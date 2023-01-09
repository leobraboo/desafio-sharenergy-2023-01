import { IUser } from "../interfaces/UserInterfaces";
import { UserRepository } from "../repository/UserRepo";

export class UserService {
  #userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.#userRepository = userRepository
  }

  async create(data: IUser): Promise<IUser> {
    console.log(data)
    const result = await this.#userRepository.create(data)
    return result._id;
  }

  async findAll(): Promise<IUser[]> {
    const result = await this.#userRepository.findAll()
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.#userRepository.delete(id)
  }

  async update(data: IUser, id: string): Promise<void> {
    await this.#userRepository.update(data, id)
  }
}