import { model } from "mongoose"
import { LoginSchema } from "../schema/LoginSchema"
import { ILoginModel } from "../interfaces/Loginterfaces"

export const LoginModel: ILoginModel = model("Login", LoginSchema)