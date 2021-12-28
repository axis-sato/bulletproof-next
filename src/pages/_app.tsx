import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { initMocksIfNeeded } from "@/mocks";

initMocksIfNeeded();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
