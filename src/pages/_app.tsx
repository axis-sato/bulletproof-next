import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Notifications from "@/components/Elements/Notifications/Notifications";
import { initMocksIfNeeded } from "@/mocks";
import AtomsDevtoolsProvider from "@/providers/atomsDevtools";

initMocksIfNeeded();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AtomsDevtoolsProvider>
      <ChakraProvider>
        <Notifications />
        <Component {...pageProps} />
      </ChakraProvider>
    </AtomsDevtoolsProvider>
  );
}

export default MyApp;
