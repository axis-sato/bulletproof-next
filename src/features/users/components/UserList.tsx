import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableProps,
  Flex,
} from "@chakra-ui/react";

import { useUsers } from "../api/getUsers";
import { useUsersTable } from "../hooks/useUsersTable";

import Spinner from "@/components/Elements/Spinner/Spinner";

type Props = TableProps;

const UserList = (props: Props) => {
  const { users, isLoading } = useUsers();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useUsersTable(users ?? []);

  if (isLoading)
    return (
      <Flex h="100" justify="center" align="center">
        <Spinner />
      </Flex>
    );

  if (!users) return null;

  return (
    <Table
      {...getTableProps()}
      boxShadow="base"
      rounded="md"
      bg="white"
      {...props}
    >
      <Thead bg="gray.200">
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <Tr key={key} {...restHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key, ...restHeaderProps } = column.getHeaderProps();
                return (
                  <Th key={key} {...restHeaderProps}>
                    {column.render("Header")}
                  </Th>
                );
              })}
            </Tr>
          );
        })}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...restRowProps } = row.getRowProps();
          return (
            <Tr key={key} {...restRowProps}>
              {row.cells.map((cell) => {
                const { key, ...restCellProps } = cell.getCellProps();
                return (
                  <Td key={key} {...restCellProps}>
                    {cell.render("Cell")}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default UserList;
<div>Enter</div>;
