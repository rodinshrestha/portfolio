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
import useConfig from "@/hooks/useConfig";

import ThemeToggle from "../ThemeToggle";

const DashboardNavbar = () => {
  const [recentNotificationCount, setRecentNotificationCount] =
    React.useState<number>(0);
  const { data, setData } = useConfig();

  const bgColor = useColorModeValue("#ffffff40", "#1A202C");
  const iconBgColor = useColorModeValue("#1A202c", "white");
  const iconColor = useColorModeValue("#A9A9A9", "#1A202c");

  const { socket } = useSocket();

  React.useEffect(() => {
    socket?.on("getNotification", ({ msg }: any) => {
      setData((prev: any) => ({
        ...prev,
        notification: [
          ...prev.notification,
          {
            sender_email: msg.senderName,
            receiver_email: msg.receiverName,
            message: msg.msg,
          },
        ],
      }));
      setRecentNotificationCount((prev) => ++prev);
      notificationSound();
    });

    return () => socket?.off();
  }, [socket, setData]);

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
          px={4}
          py={2}
          transition="all 0.2s"
          _hover={{ bg: "gray.400" }}
          // _expanded={{ bg: "blue.400" }}
          // _focus={{ boxShadow: "outline" }}
          onClick={() => setRecentNotificationCount(0)}
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
            {recentNotificationCount > 0 ? (
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
                {recentNotificationCount}
              </Box>
            ) : null}
          </Box>
        </MenuButton>

        <MenuList maxHeight="600px" overflow="auto">
          {data.notification.length ? (
            data.notification.map((list: any, i: number) => {
              return (
                <Box key={i}>
                  <MenuItem>
                    <Box>
                      <Box>{list.sender_email} sents you the message.</Box>
                      <Box>{list.message}</Box>
                    </Box>
                  </MenuItem>
                  {data.notification.length !== i + 1 && <MenuDivider />}
                </Box>
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
