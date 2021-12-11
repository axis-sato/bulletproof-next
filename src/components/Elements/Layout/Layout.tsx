import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";

type Props = { children: ReactNode; title?: string };

const Layout = ({ children, title }: Props) => {
  const appName = "Bulletproof Next";

  return (
    <Flex height="100vh" background="gray.50">
      <Head>
        <title>
          {appName}
          {title ? `-${title}` : null}
        </title>
      </Head>
      {children}
    </Flex>
  );
};

export default Layout;
