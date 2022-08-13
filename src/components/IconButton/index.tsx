import React from 'react';
import { IconButton as ChakraIconBtn, useColorModeValue } from '@chakra-ui/react';

const IconButton = ({ onClick, icon }: any) => {
  return (
    <ChakraIconBtn
      aria-label="toggle theme"
      color={useColorModeValue('#A9A9A9', '#1A202c')}
      bg={useColorModeValue('#1A202c', 'white')}
      _hover={{ bgColor: 'none' }}
      icon={icon}
      onClick={onClick}
    />
  );
};

export default IconButton;
