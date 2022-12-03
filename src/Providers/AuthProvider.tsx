import React from "react";
import Axios from "axios";

import { getLocalStorage } from "@/utils/local-storage";
import auth from "@/http/auth";
import useSocket from "@/hooks/useSocket";

type ContextType = {
  email: string | null;
  id: string | null;
  loader: boolean;
  setUserDetails: React.Dispatch<React.SetStateAction<StateTypes>>;
};

type StateTypes = Pick<ContextType, "email" | "id" | "loader">;

const initialValue: ContextType = {
  email: null,
  id: null,
  loader: false,
  setUserDetails: (state) => state,
};

export const AuthContext = React.createContext(initialValue);

interface IProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
  const [userDetails, setUserDetails] = React.useState<StateTypes>({
    email: null,
    id: null,
    loader: false,
  });
  const { socket } = useSocket();

  React.useEffect(() => {
    const token = getLocalStorage("token");
    if (token) {
      const source = Axios.CancelToken.source();
      setUserDetails((prev) => ({ ...prev, loader: true }));
      auth(source)
        .then((res: any) => {
          setUserDetails({
            email: res.data.email,
            id: res.data._id,
            loader: false,
          });
          socket?.emit("newUser", res.data.email);
        })
        .catch(() => setUserDetails((prev) => ({ ...prev, loader: false })));

      return () => {
        source.cancel();
      };
    }
  }, [socket]);

  return (
    <AuthContext.Provider value={{ ...userDetails, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
