import React from 'react';
import { Box, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import { infoArray, nameArray, designation } from '@/utils/personalInformation';
import Tags from '@/components/Tags';

import AnimatedLetter from '../AnimatedLetters';

import { StyledDiv } from './style';

const PersonalInformation = () => {
  const { colorMode } = useColorMode();

  return (
    <Tags>
      <StyledDiv className="personal_information_container" data-color-mode={colorMode}>
        <Box as="div" className="text_zone">
          <Box as="h1">
            {infoArray.map((char, i) => (
              <AnimatedLetter char={char} key={i} idx={1 + i} />
            ))}
            <br />

            {nameArray.map((char, i) => (
              <AnimatedLetter char={char} key={i} idx={4 + i} />
            ))}
            <br />
            {designation.map((char, i) => (
              <AnimatedLetter char={char} key={i} idx={21 + i} />
            ))}
          </Box>

          <Box as="h2" color={useColorModeValue('#8d8d8d', '#A9A9A9')}>
            React JS / Next Js / Typescript JS / Node JS / MongoDB{' '}
          </Box>
          <Button
            as="button"
            mt={5}
            size="lg"
            variant="outline"
            rightIcon={<ArrowDownIcon />}
            iconSpacing={4}
            _hover={{ bgColor: 'none' }}
            className="download-btn">
            Resume
          </Button>
        </Box>
      </StyledDiv>
    </Tags>
  );
};

export default PersonalInformation;
