import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
  headingMessage: string;
  message: string;
  getStartedButton: ReactNode;
  githubRepoButton: ReactNode;
};

const TopPageLyout = ({
  headingMessage,
  message,
  getStartedButton,
  githubRepoButton,
}: Props) => {
  return (
    <Flex
      height="100vh"
      background="grey.100"
      alignItems="center"
      justifyContent="center"
    >
      <Flex direction="column" alignItems="center">
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
  );
};

export default TopPageLyout;
