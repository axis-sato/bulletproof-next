import { rest } from "msw";

import { API_URL } from "@/config";

const users = [
  {
    firstName: "Masahiko",
    lastName: "Sato",
    email: "c8112002@gmail.com",
    role: "ADMIN",
    createdAt: new Date(2021, 0, 1, 0, 0, 0),
  },
  {
    firstName: "Paolo",
    lastName: "Maldini",
    email: "paolo@example.com",
    role: "USER",
    createdAt: new Date(2021, 0, 1, 0, 0, 0),
  },
  {
    firstName: "Ricardo",
    lastName: "Kaka",
    email: "ricky@example.com",
    role: "USER",
    createdAt: new Date(2021, 0, 1, 0, 0, 0),
  },
  {
    firstName: "Filippo",
    lastName: "Inzaghi",
    email: "pippo@example.com",
    role: "USER",
    createdAt: new Date(2021, 0, 1, 0, 0, 0),
  },
];

export const usersHandlers = [
  rest.get(`${API_URL}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
];
