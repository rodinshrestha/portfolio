import axios from "axios";
import type { AxiosRequestConfig } from "axios";

import { getFromLocalStorage } from "./localstorage";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // timeout: 2500,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    config.headers.Authorization = getFromLocalStorage("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
