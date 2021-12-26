export const initMocksIfNeeded = () => {
  if (!!process.env.NEXT_PUBLIC_API_MOCKING) {
    if (typeof window === "undefined") {
      const { server } = require("./server");
      server.listen();
    } else {
      const { worker } = require("./browser");
      worker.start();
    }
  }
};
