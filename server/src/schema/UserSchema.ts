import { Schema } from "mongoose"
import { IUser } from "../interfaces/UserInterfaces"

export const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    cpf: { type: String, required: true },
  },
  {
    timestamps: true
  }
)
