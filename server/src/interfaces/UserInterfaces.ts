import { Document, Model } from "mongoose"

export interface IUser extends Document  {
  id: string
  name: string
  email: string
  phone: string
  address: string
  cpf: string
}

export interface IUserModel extends Model<IUser> { }
