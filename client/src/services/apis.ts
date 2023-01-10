import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

const apiDogs = axios.create({
  baseURL: 'https://random.dog/'
});

const randomConfig = axios.create({
  baseURL: 'https://randomuser.me/api/' 
});

export { api, apiDogs, randomConfig };