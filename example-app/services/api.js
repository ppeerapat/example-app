import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.response.use(
  (response) => {
    if (
      response.data &&
      response.headers["content-type"].includes("application/json")
    ) {
      response.data = camelizeKeys(response.data);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

api.interceptors.request.use((config) => {
  const newConfig = { ...config };
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }
  return newConfig;
});

export default api;
