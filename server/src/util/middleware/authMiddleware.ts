import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'


export function authMiddlewares(request: Request, response: Response, next: NextFunction) {
  try {
    const { authorization } = request.headers

    if (!authorization) return response.sendStatus(401)

    const token = authorization.replace('Bearer', '').trim()
    jwt.verify(token, "wdwdijwdjwdwidjwidijw", (error, decode) => {
      if(error){
        return response.status(401).json({message: "Ocorreu um erro ao verificar o token"})
      }
    })
    next()

  } catch (error) {
    return response.sendStatus(401)
  }
}