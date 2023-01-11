import { Model } from "mongoose"
import { UserController } from "./UserController"
import { UserService } from "../services/UserService"
import { UserRepository } from "../repository/UserRepo"
import { UserModel } from "../models/user"
import { IUser } from "../interfaces/UserInterfaces"
import { LoginController } from "./LoginController"
import { LoginModel } from "../models/login"
import { LoginRepository } from "../repository/LoginRepository"
import { ILogin } from "../interfaces/Loginterfaces"
import { LoginService } from "../services/LoginService"

const user = (): UserController => {
  const userModel = UserModel
  const userRepository = new UserRepository(userModel as Model<IUser>)
  const userService = new UserService(userRepository)
  const userController = new UserController(userService)

  return userController
}

const userController = user()

const login = (): LoginController => {
  const loginModel = LoginModel
  const loginRepository = new LoginRepository(loginModel as Model<ILogin>)
  const loginService = new LoginService(loginRepository)
  const loginController = new LoginController(loginService)

  return loginController
}

const loginController = login()

export { userController, loginController }




