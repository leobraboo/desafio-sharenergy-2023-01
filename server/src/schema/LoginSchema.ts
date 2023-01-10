import { Schema } from "mongoose"
import { ILogin } from "../interfaces/Loginterfaces"

export const LoginSchema = new Schema<ILogin>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
  }
)
