import aspida from "@aspida/axios";
import Axios from "axios";

import api from "./aspida/$api";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: エラートーストを表示する
    console.error("Error Notification", error);
    return Promise.reject(error);
  }
);

export const client = api(aspida(axios));
