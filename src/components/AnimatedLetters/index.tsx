import React from "react";
import clsx from "clsx";
import { Box, useColorModeValue } from "@chakra-ui/react";

import { convertSpecialString } from "@/utils/convertSpecialString";

import styles from "./style.module.scss";

interface IProps {
  char: string;
  idx: number;
  // renderClass: string;
}

const AnimatedLetter = ({ char, idx }: IProps) => {
  const [mouseEntered, setMouseEntered] = React.useState(false);
  const [state, setState] = React.useState("initial_animate");

  return (
    <Box
      as="span"
      className={clsx(
        styles.text_animate,
        `${styles["_" + idx]}`,
        styles[state],
        {
          text_animation: mouseEntered,
        }
      )}
      _hover={{ color: useColorModeValue("#A9A9A9", "#ffd700"), opacity: 0.8 }}
      onMouseEnter={() => {
        setMouseEntered(true);
        setState("");
      }}
      onMouseLeave={() => setTimeout(() => setMouseEntered(false), 500)}
    >
      {convertSpecialString(char)}
    </Box>
  );
};

export default AnimatedLetter;
