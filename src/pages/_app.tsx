import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Notifications from "@/components/Elements/Notifications/Notifications";
import { initMocksIfNeeded } from "@/mocks";

initMocksIfNeeded();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Notifications />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
