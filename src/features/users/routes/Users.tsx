import UserList from "../components/UserList";

import MainLayout from "@/components/Layout/MainLayout";

const Users = () => {
  return (
    <MainLayout title="Users">
      <UserList mt="5" />
    </MainLayout>
  );
};

export default Users;
