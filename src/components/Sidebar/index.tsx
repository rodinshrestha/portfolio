import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Center, Flex, Box } from "@chakra-ui/react";

import { route } from "@/config/route";
import useAuth from "@/hooks/useAuth";
import { turncateId } from "@/utils/string";
import { removeLocalStorage } from "@/utils/local-storage";

const Sidebar = () => {
  const { pathname, push } = useRouter();
  const { email, id, setUserDetails } = useAuth();

  const handleLogout = () => {
    removeLocalStorage("token");
    setUserDetails({ email: null, id: null, loader: false });
    push("/login");
  };

  return (
    <Flex
      // position="fixed"
      shadow="sm"
      w="72"
      bg="purple.900"
      flexDirection="column"
      bgGradient="linear(to-br, green.500, blue.700)"
      height="100%"
      overflowY="auto"
      textColor="white"
      zIndex="30"
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
                  textColor={activeTab ? "white" : "whiteAlpha.800"}
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
              textColor={activeTab ? "white" : "whiteAlpha.800"}
              bgColor={activeTab ? "blackAlpha.500" : "transparent"}
              px="4"
              borderRadius="lg"
              _activeLink={{ bg: "blackAlpha.500", textColor: "white" }}
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

// (
//   <Flex
//     minH="12"
//     alignItems="center"
//     _hover={{ color: "white", bg: "blackAlpha.300" }}
//     textColor={activeTab ? "white" : "whiteAlpha.800"}
//     bgColor={activeTab ? "blackAlpha.500" : "transparent"}
//     px="4"
//     borderRadius="lg"
//     _activeLink={{ bg: "blackAlpha.500", textColor: "white" }}
//     key={i}
//   >
//     <Center fontSize="xl" mr="3">
//       {x.icon}
//     </Center>
//     {x.label}
//   </Flex>
// );

{
  /* <Link href={x.link} key={i}>
              <a>
                <Flex
                  minH="12"
                  alignItems="center"
                  _hover={{ color: "white", bg: "blackAlpha.300" }}
                  textColor={activeTab ? "white" : "whiteAlpha.800"}
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
            </Link> */
}
