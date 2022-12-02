import React from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#1A202c", "white");
  return (
    <IconButton
      aria-label="toggle theme"
      color={useColorModeValue("#A9A9A9", "#1A202c")}
      bg={bgColor}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      _hover={{ bgColor: "none" }}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
