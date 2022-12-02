import React from "react";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiNotification3Fill } from "react-icons/ri";

import useSocket from "@/hooks/useSocket";
import { notificationSound } from "@/utils/notification-sound";

import ThemeToggle from "../ThemeToggle";

const DashboardNavbar = () => {
  const [notification, setNotification] = React.useState<any>([]);

  const bgColor = useColorModeValue("#ffffff40", "#1A202C");
  const iconBgColor = useColorModeValue("#1A202c", "white");
  const iconColor = useColorModeValue("#A9A9A9", "#1A202c");

  const { socket } = useSocket();

  React.useEffect(() => {
    socket?.on("getNotification", (msg: any) => {
      setNotification((prev: any) => [...prev, msg]);
      notificationSound();
    });

    return () => socket?.off();
  }, [socket]);

  console.log(notification);

  return (
    <Flex
      position="relative"
      boxShadow="base"
      h="14"
      px="6"
      alignItems="center"
      bg={bgColor}
      gap={3}
      justifyContent="flex-end"
      borderBottom="1px solid rgba(255, 255, 255, 0.16)"
    >
      <ThemeToggle />
      <Menu>
        <MenuButton
          as={"button"}
          border="1px solid black"
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "blue.400" }}
          _focus={{ boxShadow: "outline" }}
        >
          <Box position="relative">
            <Box
              padding={2}
              bg={iconBgColor}
              borderRadius={5}
              color={iconColor}
            >
              <RiNotification3Fill size="22px" />
            </Box>
            {notification.length ? (
              <Box
                position="absolute"
                top="-11px"
                right={"-7px"}
                backgroundColor="red"
                p={1}
                height={3}
                width={3}
                boxSizing="content-box"
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                color="white"
              >
                {notification.length}
              </Box>
            ) : null}
          </Box>
        </MenuButton>

        <MenuList>
          {notification.length ? (
            notification.map((list: any, i: number) => {
              console.log(notification.length, i);
              return (
                <>
                  <MenuItem key={i}>
                    <Box>
                      <Box>{list.msg.senderName} sents you the message.</Box>
                      <Box>{list.msg.msg}</Box>
                    </Box>
                  </MenuItem>
                  {notification.length !== i + 1 && <MenuDivider />}
                </>
              );
            })
          ) : (
            <MenuItem>Nothing is here</MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DashboardNavbar;
