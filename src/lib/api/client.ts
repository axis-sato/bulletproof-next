import aspida from "@aspida/axios";
import Axios from "axios";
import { useMemo } from "react";

import api from "./aspida/$api";

import { useNotificationsAtom } from "@/atoms/notifications";

export const useClient = () => {
  const axios = useMemo(
    () =>
      Axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
      }),
    []
  );

  const { addNotification } = useNotificationsAtom();

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const message = error.response?.data?.message || error.message;
      addNotification({ type: "error", title: "Error", message });
      return Promise.reject(error);
    }
  );

  const client = api(aspida(axios));

  return client;
};
