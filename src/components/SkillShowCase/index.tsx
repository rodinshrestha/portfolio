import React from "react";
import clsx from "clsx";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

import styles from "./style.module.scss";

const SkillShowCase = () => {
  return (
    <>
      <Box as="div" className={styles.cube_container}>
        <Box
          as="div"
          className={clsx(styles.cube_skill_face, styles.cube_skill_face_1)}
        >
          <Image src="/assets/images/skills/next.png" alt="asd" layout="fill" />
        </Box>

        <Box
          as="div"
          className={clsx(styles.cube_skill_face, styles.cube_skill_face_2)}
        >
          <Image
            src="/assets/images/skills/react.png"
            alt="asd"
            layout="fill"
          />
        </Box>

        <Box
          as="div"
          className={clsx(styles.cube_skill_face, styles.cube_skill_face_3)}
        >
          <Image src="/assets/images/skills/node.png" alt="asd" layout="fill" />
        </Box>

        <Box
          as="div"
          className={clsx(styles.cube_skill_face, styles.cube_skill_face_4)}
        >
          <Image
            src="/assets/images/skills/typescript.png"
            alt="asd"
            layout="fill"
          />
        </Box>

        <Box
          as="div"
          className={clsx(styles.cube_skill_face, styles.cube_skill_face_5)}
        >
          <Image
            src="/assets/images/skills/mongoDB.png"
            alt="asd"
            layout="fill"
          />
        </Box>

        <Box
          as="div"
          className={clsx(styles.cube_skill_face, styles.cube_skill_face_6)}
        >
          <Image src="/assets/images/skills/css.png" alt="asd" layout="fill" />
        </Box>
      </Box>

      <Box
        as="div"
        className={clsx(styles.cube_shadow)}
        bg={useColorModeValue(
          "rgb(220,220,220, 0.2)",
          "rgba(255, 255, 255, 0.171)"
        )}
      />
    </>
  );
};

export default SkillShowCase;
