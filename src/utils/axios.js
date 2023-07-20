import axios from "axios";

const instance = axios.create({
  baseURL: "https://crudcrud.com/api/77956f4d4beb400cb367fa7b8ec23e29",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

export default instance;
