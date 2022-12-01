import React from "react";
// import { io } from "socket.io-client";

import { SocketContext } from "@/Providers/SocketProvider";

const useSocket = () => React.useContext(SocketContext);

// const useSocket = () => {
//   const [socket, setSocket] = React.useState<any>(null);

//   return { socket, setSocket };
// };

export default useSocket;
