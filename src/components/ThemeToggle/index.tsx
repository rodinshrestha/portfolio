import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="toggle theme"
      color={useColorModeValue('#A9A9A9', '#1A202c')}
      bg={useColorModeValue('#1A202c', 'white')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      _hover={{ bgColor: 'none' }}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
