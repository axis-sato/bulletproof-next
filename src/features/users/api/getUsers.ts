import useAspidaSWR from "@aspida/swr";

import { useClient } from "@/lib/api";

export const useUsers = () => {
  const client = useClient();

  const { data, error } = useAspidaSWR(client.users, "get", {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    users: data?.body.users,
    isLoading: !error && !data,
    isError: error,
  };
};
