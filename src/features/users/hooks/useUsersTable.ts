import { useMemo } from "react";
import { useTable, Column } from "react-table";

import { UserRole, USER_ROLE_ADMIN, USER_ROLE_USER } from "@/hooks/useAuth";

type UserTableRow = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdAt: Date;
};

export const useUsersTable = () => {
  const data: UserTableRow[] = useMemo(
    () => [
      {
        firstName: "Masahiko",
        lastName: "Sato",
        email: "c8112002@gmail.com",
        role: USER_ROLE_ADMIN,
        createdAt: new Date(2021, 0, 1, 0, 0, 0),
      },
      {
        firstName: "Paolo",
        lastName: "Maldini",
        email: "paolo@example.com",
        role: USER_ROLE_USER,
        createdAt: new Date(2021, 0, 1, 0, 0, 0),
      },
      {
        firstName: "Ricardo",
        lastName: "Kaka",
        email: "ricky@example.com",
        role: USER_ROLE_USER,
        createdAt: new Date(2021, 0, 1, 0, 0, 0),
      },
      {
        firstName: "Filippo",
        lastName: "Inzaghi",
        email: "pippo@example.com",
        role: USER_ROLE_USER,
        createdAt: new Date(2021, 0, 1, 0, 0, 0),
      },
    ],
    []
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
