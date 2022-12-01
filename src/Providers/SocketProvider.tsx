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
    const newSocket: any = io("http://localhost:5001");
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
