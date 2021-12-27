/* eslint-disable */
export type User = {
  /** Unique identifier for the given user. */
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "ADMIN" | "USER";
  /** The date that the user was created. */
  createDate: string;
};
