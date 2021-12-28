import useAspidaSWR from "@aspida/swr";

import { client } from "@/lib/api";

export const useUsers = () => {
  const { data, error } = useAspidaSWR(client.users, "get");

  return {
    users: data?.body.users,
    isLoading: !error && !data,
    isError: error,
  };
};
