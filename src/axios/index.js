import axios from "axios";

export const clientApi = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 10000,
});
