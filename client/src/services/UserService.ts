import { api } from "./apis";
import { IUser } from "../interface/IUser";

class UserService {
  async save(dataUser: IUser) {
    const { data } = await api.post('/user/save', dataUser)
    return data
  }

  async update(dataUser: IUser) {
    await api.put(`/user/${dataUser._id}`, dataUser)
  }

  async delete(id: string | undefined) {
    await api.delete(`/user/delete/${id}`)
  }

  async findById(id: string | undefined) {
    const { data } = await api.get(`/user/update/${id}`)
    return data
  }

  async findAll(){
    const { data } = await api.get('/user/findall')
    return data
}
}

export default new UserService()