import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Button from "@/components/Elements/Button/Button";
import { pagesPath } from "@/lib/$path";

const RegisterForm = () => {
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
        <FormLabel>First Name</FormLabel>
        <Input type="text" />
      </Box>
      <Box mb="4">
        <FormLabel>Last Name</FormLabel>
        <Input type="text" />
      </Box>
      <Box mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </Box>
      <Box mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </Box>
      <Box mb="4">
        <FormLabel htmlFor="join-existing-team" mb="0">
          Join Existing Team
        </FormLabel>
        <Switch id="join-existing-team" colorScheme="teal" />
      </Box>
      <Box mb="4">
        <FormLabel>Team Name</FormLabel>
        <Input type="text" />
      </Box>
      <Button colorScheme="teal" mb="2">
        Register
      </Button>
      <Flex justify="end">
        <Link href={pagesPath.auth.login.$url()}>
          <a>log In</a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default RegisterForm;
