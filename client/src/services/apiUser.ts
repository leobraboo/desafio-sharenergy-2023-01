import axios from "axios";

const randomConfig = axios.create({
  baseURL: 'https://randomuser.me/api/' 
});

export default randomConfig;