import React from "react";
import { Badge, Flex, IconButton } from "@chakra-ui/react";
import { RiNotification3Fill } from "react-icons/ri";

import useSocket from "@/hooks/useSocket";

const DashboardNavbar = () => {
  const [notification, setNotification] = React.useState<any>([]);

  const { socket } = useSocket();

  React.useEffect(() => {
    socket?.on("getNotification", (msg: any) =>
      setNotification((prev: any) => [...prev, msg])
    );

    return () => socket.off();
  }, [socket]);

  console.log(notification);

  return (
    <Flex
      position="relative"
      boxShadow="base"
      h="14"
      px="6"
      alignItems="center"
      bg="white"
      justifyContent="flex-end"
    >
      <IconButton
        variant=""
        colorScheme="blue"
        color="blue"
        size="sm"
        fontSize="xl"
        aria-label="notification"
        icon={<RiNotification3Fill />}
        // onClick={() => setShowSidebar(!showSidebar)}
      />
      <Badge>{notification.length}</Badge>
    </Flex>
  );
};

export default DashboardNavbar;
