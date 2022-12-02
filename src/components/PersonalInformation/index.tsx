import React from "react";
import { Box, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import { infoArray, nameArray, designation } from "@/utils/personalInformation";
import Tags from "@/components/Tags";
import useToast from "@/hooks/useToast";
import { downloadResume } from "@/utils/downloadResume";
import { CV_URL } from "@/constants/cv";

import AnimatedLetter from "../AnimatedLetters";

import { StyledDiv } from "./style";

const PersonalInformation = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  const handleDownload = (url: string) => {
    const keyWord = window.prompt(
      "Security code is required to download resume"
    );

    if (keyWord !== "7142") {
      toast.failed("Failed", "code is incorrect");
      return;
    }
    downloadResume(url);
  };

  return (
    <Tags>
      <StyledDiv
        className="personal_information_container"
        data-color-mode={colorMode}
      >
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

          <Box as="h2" color={useColorModeValue("#8d8d8d", "#A9A9A9")}>
            React JS / Next Js / Typescript / Node JS / MongoDB{" "}
          </Box>
          <Button
            as="a"
            mt={5}
            size="lg"
            variant="outline"
            rightIcon={<ArrowDownIcon />}
            iconSpacing={4}
            _hover={{ bgColor: "none" }}
            className="download-btn"
            // href="/assets/my-cv.pdf"
            onClick={() => handleDownload(CV_URL)}
          >
            Resume
          </Button>
        </Box>
      </StyledDiv>
    </Tags>
  );
};

export default PersonalInformation;
