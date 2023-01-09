import { Model } from "mongoose"
import { UserController } from "./UserController"
import { UserService } from "../services/UserService"
import { UserRepository } from "../repository/UserRepo"
import { UserModel } from "../models/user"
import { IUser } from "../interfaces/UserInterfaces"

const user = (): UserController => {
  const userModel = UserModel
  const userRepository = new UserRepository(userModel as Model<IUser>)
  const userService = new UserService(userRepository)
  const userController = new UserController(userService)
  
  return userController
}

export const userController = user()



