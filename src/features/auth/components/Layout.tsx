import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";

import { APP_NAME } from "@/constants/appName";

type Props = { children: ReactNode; headTitle: string; title: string };

const Layout = ({ children, headTitle, title }: Props) => {
  return (
    <Flex height="100vh" background="gray.50">
      <Head>
        <title>
          {APP_NAME}
          {headTitle ? `-${headTitle}` : null}
        </title>
      </Head>
      <Flex width="100%" align="center" justify="center">
        <Flex direction="column" align="center" width="100%">
          <Box mb="4">
            <Text fontSize="3xl" fontWeight="bold">
              {title}
            </Text>
          </Box>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
