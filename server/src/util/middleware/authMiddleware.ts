import { Request, Response, NextFunction } from "express";
// import jwt from 'jsonwebtoken'

// interface tokenPayload {
//   id: string
//   rule: string
//   iat: number
//   exp: number
// }

// export function authMiddlewares(request: Request, response: Response, next: NextFunction) {
//   try {
//     const { authorization } = request.headers

//     if (!authorization) return response.sendStatus(401)

//     const token = authorization.replace('Bearer', '').trim()

//     next()

//   } catch (error) {
//     return response.sendStatus(401)
//   }
// }