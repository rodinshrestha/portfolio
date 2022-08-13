import clsx from 'clsx';
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

const Tags = ({ children }: Props) => {
  return (
    <Box as="div" className={styles.tag_container}>
      <Box
        as="span"
        className={clsx(styles.tags, styles.top_tags)}
        color={useColorModeValue('#8d8d8d', '#ffd700')}>
        <Box as="span">&lt;html&gt;</Box>
        <br />
        <Box as="span">
          &lt;head \&gt;
          <br />
        </Box>
        &lt;body&gt;
      </Box>

      {children}

      <Box
        as="span"
        className={clsx(styles.tags, styles.bottom_tags)}
        color={useColorModeValue('#8d8d8d', '#ffd700')}>
        &lt;/ body&gt;
        <br />
        <Box as="span" className={clsx(styles.bottom_tag_html)}>
          &lt;/html&gt;
        </Box>
      </Box>
    </Box>
  );
};

export default Tags;
