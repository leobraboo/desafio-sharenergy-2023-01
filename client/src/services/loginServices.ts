import { api } from "./apis";
import { ILogin } from "../interface/Ilogin";

class LoginService {
  async save(dataLogin: ILogin) {
    const { data } = await api.post('/login/save', dataLogin)
    return data
  }

  async login(dataLogin: ILogin) {
    const { data } = await api.post('/login/auth/token', dataLogin)
    return data.token
  }
}

export default new LoginService()
