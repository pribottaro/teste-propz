import axios from "axios";
import produtos from "./produtos.json";

const api = axios.create({
  baseURL: produtos,
});

export default api;