import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";

import { APP_NAME } from "@/constants/appName";

type Props = {
  headingMessage: string;
  message: string;
  getStartedButton: ReactNode;
  githubRepoButton: ReactNode;
};

const Lyout = ({
  headingMessage,
  message,
  getStartedButton,
  githubRepoButton,
}: Props) => {
  return (
    <Flex height="100vh" background="gray.50">
      <Head>
        <title>{APP_NAME}-home</title>
      </Head>
      <Flex align="center" justify="center" width="100%">
        <Flex direction="column" align="center">
          <Box p="2" mb="6">
            <Heading size="3xl">{headingMessage}</Heading>
          </Box>

          <Text fontSize="md" mb="6">
            {message}
          </Text>

          <Flex direction="row">
            {getStartedButton}
            <Box width="6" />
            {githubRepoButton}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Lyout;
