import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import AppLayout from "@/components/Elements/Layout/Layout";

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
    <AppLayout title="home">
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
    </AppLayout>
  );
};

export default TopPageLyout;
