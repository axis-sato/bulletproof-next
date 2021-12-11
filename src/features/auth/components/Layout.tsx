import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import AppLayout from "@/components/Elements/Layout/Layout";

type Props = { children: ReactNode; headTitle: string; title: string };

const Layout = ({ children, headTitle, title }: Props) => {
  return (
    <AppLayout title={headTitle}>
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
    </AppLayout>
  );
};

export default Layout;
