import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController {
  #userService: UserService

  constructor(userService: UserService) {
    this.#userService = userService
  }

  async save(request: Request, response: Response) {
    try {
      const data = request.body
      const result = await this.#userService.create(data)

      return response.status(200).json(result)
    } catch (error: any) {
      console.log(error)
      return response.status(422).json({ Erro: error.message, statusCode: error.statusCode })
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const data = request.body
      const result = await this.#userService.findAll()

      return response.status(200).json(result)
    } catch (error: any) {
      console.log(error)
      return response.status(422).json({ Erro: error.message, statusCode: error.statusCode })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const {id} = request.params
      const result = await this.#userService.delete(id)

      return response.status(204).json(result)
    } catch (error: any) {
      console.log(error)
      return response.status(422).json({ Erro: error.message, statusCode: error.statusCode })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const data = request.body
      const {id} = request.params

      await this.#userService.update(data, id)

      return response.status(204).json()
    } catch (error: any) {
      console.log(error)
      return response.status(422).json({ Erro: error.message, statusCode: error.statusCode })
    }
  }
}