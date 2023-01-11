import { Request, Response } from "express"
import { LoginService } from "../services/LoginService"

export class LoginController {
  #loginService: LoginService

  constructor(LoginService: LoginService) {
    this.#loginService = LoginService
  }

  async save(request: Request, response: Response) {
    try {
      const data = request.body
      const result = await this.#loginService.create(data)
     
      return response.status(200).json(result)
    } catch (error: any) {
      console.log(error)
      return response.status(422).json({ Erro: error.message, statusCode: error.statusCode })
    }
  }

  async login(request: Request, response: Response) {
    try {
      const data = request.body

      const token = await this.#loginService.login(data)
      return response.status(202).json({ token })
    } catch (error: any) {
      console.log(error)
      return response.status(422).json({ Erro: error.message, statusCode: error.statusCode })
    }
  }
}