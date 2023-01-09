import { model } from "mongoose"
import { UserSchema } from "../schema/UserSchema"
import { IUserModel } from "../interfaces/UserInterfaces"

export const UserModel: IUserModel = model("Users", UserSchema)