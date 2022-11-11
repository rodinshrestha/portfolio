import React from 'react';
import { IconButton as ChakraIconBtn, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

interface IProps {
  onClick?: () => void;
  icon: any;
  href: string;
  download?: boolean;
}

const IconButton = ({ onClick, icon, href, download = false, ...rest }: IProps) => {
  return (
    <Link href={href} passHref>
      <a target="_blank" download={download ? true : false}>
        <ChakraIconBtn
          aria-label="toggle theme"
          color={useColorModeValue('#A9A9A9', '#1A202c')}
          bg={useColorModeValue('#1A202c', 'white')}
          _hover={{ bgColor: 'none' }}
          icon={icon}
          onClick={onClick}
          {...rest}
        />
      </a>
    </Link>
  );
};

export default IconButton;
