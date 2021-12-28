/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  /** ユーザ一覧取得 */
  get: {
    status: 200;

    /** Example response */
    resBody: {
      users: Types.User[];
    };
  };
};
