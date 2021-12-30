import { useAtomsDevtools } from "jotai/devtools";
import { ReactElement } from "react";

import { APP_NAME } from "@/constants/appName";

const AtomsDevtoolsProvider = ({ children }: { children: ReactElement }) => {
  useAtomsDevtools(APP_NAME);
  return children;
};

export default AtomsDevtoolsProvider;
