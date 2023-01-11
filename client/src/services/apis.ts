import axios from "axios";
 
const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

api.interceptors.request.use((axiosInstance: any) => {
  const token = sessionStorage.getItem("token")
  if (token) {
    axiosInstance.headers = {
      ...axiosInstance.headers,
      Autorization: `Bearer ${sessionStorage.getItem("token")}`
    }
  }

  return axiosInstance
})

const apiDogs = axios.create({
  baseURL: 'https://random.dog/'
});

const randomConfig = axios.create({
  baseURL: 'https://randomuser.me/api/'
});

export { api, apiDogs, randomConfig };