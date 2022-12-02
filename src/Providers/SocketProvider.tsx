import React from "react";
import io from "socket.io-client";

// interface ClientToServerEvents {
//   hello: () => void;
// }
// interface ServerToClientEvents {
//   noArg: () => void;
//   basicEmit: (a: number, b: string, c: Buffer) => void;
//   withAck: (d: string, callback: (e: number) => void) => void;
// }

interface Initial {
  socket: any;
}

const initial: Initial = {
  socket: null,
};

export const SocketContext = React.createContext(initial);

interface IProps {
  children: React.ReactNode;
}
const SocketProvider = ({ children }: IProps) => {
  const [socket, setSocket] = React.useState<any>(null);

  React.useEffect(() => {
    const SOCKET_URL: any = process.env.NEXT_PUBLIC_BASE_URL;
    const connectionOptions: any = {
      "force new connection": true,
      reconnectionAttempts: "Infinity",

      transports: ["websocket"],
    };
    const newSocket: any = io(SOCKET_URL, connectionOptions);
    setSocket(newSocket);
    console.log("socket connection established");

    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
