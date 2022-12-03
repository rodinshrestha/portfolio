import React from "react";

import { ConfigContext } from "@/Providers/ConfigProvider";

const useConfig = () => React.useContext(ConfigContext);

export default useConfig;
