import aspida from "@aspida/axios";
import axios from "axios";

import api from "./aspida/$api";

export const client = api(
  aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL })
);
