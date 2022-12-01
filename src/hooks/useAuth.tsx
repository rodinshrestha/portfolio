import React from "react";

import { AuthContext } from "@/Providers/AuthProvider";

const useAuth = () => React.useContext(AuthContext);

export default useAuth;
