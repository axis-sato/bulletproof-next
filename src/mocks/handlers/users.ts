import { rest } from "msw";

import components from "../components";

import { API_URL } from "@/config";

export const usersHandlers = [
  rest.get(`${API_URL}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(components.UsersResponse));
  }),
];
