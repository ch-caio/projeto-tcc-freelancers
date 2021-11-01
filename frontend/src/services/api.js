import axios from "axios";

const api = axios.create({
  baseURL: "https://tcc-freelancers.herokuapp.com",
});

export default api;