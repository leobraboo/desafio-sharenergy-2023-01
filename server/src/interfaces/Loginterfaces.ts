import { Document, Model } from "mongoose"

export interface ILogin extends Document  {
  id: string
  username : string
  email: string
  password: string
}

export interface ILoginModel extends Model<ILogin> { }
