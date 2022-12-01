import React from "react";
import { io } from "socket.io-client";

import useAuth from "@/hooks/useAuth";

export const PlayGround = () => {
  const [socket, setSocket] = React.useState<any>(null);
  const { id } = useAuth();

  React.useEffect(() => {
    setSocket(io("http://localhost:5001"));
  }, []);

  React.useEffect(() => {
    if (socket) {
      socket.emit("newUser", "testing");
    }
  }, [socket, id]);

  return <div>PlayGround</div>;
};

export default PlayGround;
