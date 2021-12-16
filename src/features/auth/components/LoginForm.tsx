import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Button from "@/components/Elements/Button/Button";
import { pagesPath } from "@/lib/$path";

const LoginForm = () => {
  const router = useRouter();
  const handleLogIn = () => router.push(pagesPath.app.$url());
  return (
    <Flex
      background="white"
      rounded={6}
      border="1px"
      borderColor="gray.200"
      direction="column"
      py="6"
      px="10"
      width={{
        base: "100%",
        md: "500px",
      }}
    >
      <Box mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </Box>
      <Box mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </Box>
      <Button colorScheme="teal" mb="2" onClick={handleLogIn}>
        Log in
      </Button>
      <Flex justify="end">
        <Link href={pagesPath.auth.register.$url()}>
          <a>register</a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
