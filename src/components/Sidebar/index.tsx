import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Center, Flex } from "@chakra-ui/react";

import { route } from "@/config/route";

const Sidebar = () => {
  const { pathname } = useRouter();
  // console.log({ router });

  // const currentPath = router.pathname.split('/');
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
        Rodin shrestha
      </Center>
      <Flex flexDirection="column" px="6">
        {route.map((x, i) => {
          const activeTab = pathname === x.link;
          return (
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
          );
        })}
      </Flex>
    </Flex>
  );
};
export default Sidebar;
