import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Center, Flex, Box, useColorModeValue } from "@chakra-ui/react";

import { route } from "@/config/route";
import useAuth from "@/hooks/useAuth";
import { turncateId } from "@/utils/string";
import { removeLocalStorage } from "@/utils/local-storage";

const Sidebar = () => {
  const { pathname, push } = useRouter();
  const { email, id, setUserDetails } = useAuth();
  const bgColor = useColorModeValue("#ffffff40", "#1A202C");

  const handleLogout = () => {
    removeLocalStorage("token");
    setUserDetails({ email: null, id: null, loader: false });
    push("/login");
  };

  return (
    <Flex
      shadow="sm"
      w="72"
      bg={bgColor}
      flexDirection="column"
      height="100%"
      overflowY="auto"
      zIndex="30"
      borderRight="1px solid rgba(255, 255, 255, 0.16)"
      transition="transform 0.1s"
      transform={{
        base: "translateX(0)",
        md: "none",
      }}
    >
      <Center minH="14" p="4" mb="2" flexDirection="column" flexShrink={0}>
        <Box>Welcome</Box>
        <Box>{email}</Box>
        <Box>ID : {turncateId(id, 4)}</Box>
      </Center>
      <Flex flexDirection="column" px="6">
        {route.map((x, i) => {
          const activeTab = pathname === x.link;

          return x.link ? (
            <Link href={x.link} key={i}>
              <a>
                <Flex
                  minH="12"
                  alignItems="center"
                  _hover={{ color: "white", bg: "blackAlpha.300" }}
                  textColor={activeTab ? "white" : "inherit"}
                  bgColor={activeTab ? "blackAlpha.500" : "transparent"}
                  px="4"
                  borderRadius="lg"
                  _activeLink={{ bg: "blackAlpha.500", textColor: "white" }}
                >
                  <Center fontSize="xl" mr="3">
                    {x.icon}
                  </Center>
                  {x.label}
                </Flex>
              </a>
            </Link>
          ) : (
            <Flex
              minH="12"
              alignItems="center"
              _hover={{ color: "white", bg: "blackAlpha.300" }}
              px="4"
              borderRadius="lg"
              key={i}
              onClick={handleLogout}
              cursor="pointer"
            >
              <Center fontSize="xl" mr="3">
                {x.icon}
              </Center>
              {x.label}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
export default Sidebar;
