import axios from "axios";

const apiDogs = axios.create({
  baseURL: 'https://random.dog/'
});

export default apiDogs;