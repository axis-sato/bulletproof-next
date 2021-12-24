import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

import MainLayout from "@/components/Layout/MainLayout";
import { useAuth, USER_ROLE_ADMIN, USER_ROLE_USER } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const privileges = {
    [USER_ROLE_USER]: ["Create comments in discussions", "Delete own comments"],
    [USER_ROLE_ADMIN]: [
      "Create discussions",
      "Edit discussions",
      "Delete discussions",
      "Comment on discussions",
      "Delete all comments",
    ],
  };
  return (
    <MainLayout title="Dashboard">
      <Text fontSize="xl" mb="3">
        Welcome{" "}
        <Text as="span" fontWeight="bold">
          {user.name}
        </Text>
      </Text>
      <Text mb="3">
        Your role is:{" "}
        <Text as="span" fontWeight="bold">
          {user.role}
        </Text>
      </Text>
      <Box>
        <Text mb="3">In this application you can:</Text>
        <UnorderedList>
          {privileges[user.role].map((privilege, i) => (
            <ListItem key={i}>{privilege}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
