import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com/";

//Axios Global Default Setting

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});
