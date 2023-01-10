import { Request, Response } from "express"
import { LoginService } from "../services/LoginService"

export class LoginController {
  #LoginService: LoginService

  constructor(LoginService: LoginService) {
    this.#LoginService = LoginService
  }

  async save(request: Request, response: Response) {
    try {
      const data = request.body
      const result = await this.#LoginService.create(data)

      return response.status(200).json(result)
    } catch (error: any) {
      console.log(error)
      return response.status(422).json({ Erro: error.message, statusCode: error.statusCode })
    }
  }
}