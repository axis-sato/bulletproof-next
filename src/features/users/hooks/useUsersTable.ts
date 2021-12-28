import { useMemo } from "react";
import { useTable, Column } from "react-table";

import { UserRole } from "@/hooks/useAuth";
import { User } from "@/lib/api/aspida/@types";

type UserTableRow = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdAt: Date;
};

export const useUsersTable = (users: User[]) => {
  const data: UserTableRow[] = useMemo(
    () =>
      users.map((user) => ({
        ...user,
        createdAt: new Date(user.createDate),
      })),
    [users]
  );

  const columns: ReadonlyArray<Column<UserTableRow>> = useMemo(
    () => [
      {
        Header: "FIRST NAME",
        accessor: "firstName",
      },
      {
        Header: "LAST NAME",
        accessor: "lastName",
      },
      {
        Header: "EMAIL",
        accessor: "email",
      },
      {
        Header: "ROLE",
        accessor: "role",
      },
      {
        id: "createdAt",
        Header: "CREATED_AT",
        accessor: (row) => row.createdAt.toISOString(),
      },
    ],
    []
  );

  return useTable({ columns, data });
};
