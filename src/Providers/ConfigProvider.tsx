import React from "react";
import Axios from "axios";

import { getNotification } from "@/http/notification";
import { getFromLocalStorage } from "@/utils/localstorage";

type Notification = [
  { receiver_name: string; sender_name: string; message: string }
];

type ContextType = {
  data: {
    notification: Notification | [];
  };
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const initialValues: ContextType = {
  data: {
    notification: [],
  },
  setData: (state) => state,
};

export const ConfigContext = React.createContext(initialValues);

interface IProps {
  children: React.ReactNode;
}

const ConfigProvider = ({ children }: IProps) => {
  const [data, setData] = React.useState<any>({
    notification: [],
  });

  const token = getFromLocalStorage("token");

  React.useEffect(() => {
    if (token) {
      const source = Axios.CancelToken.source();

      getNotification(source)
        .then((res) => {
          console.log(res);
          setData({
            notification: res.data,
          });
        })
        .catch((e) => console.log(e));

      return () => {
        source.cancel();
      };
    }
  }, [token]);

  return (
    <ConfigContext.Provider value={{ data, setData }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
