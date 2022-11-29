import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithubAlt, FaDownload } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import IconButton from "@/components/IconButton";

import ThemeToggle from "../ThemeToggle";
import Logo from "../Logo";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        // px={20}
        // py={2}
        className="my_container"
        flexWrap="wrap"
        justifyContent="space-between"
        maxW="1920px"
        alignItems="center"
      >
        <Flex align="center" mr={5} flexGrow={1}>
          <Heading as="h1" size="md">
            <Logo />
            {/* {name.map((char, i) => (
              <AnimatedLetter char={char} key={i} idx={1 + i} />
            ))} */}
          </Heading>
        </Flex>

        {/* <ThemeToggle /> */}
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ md: "auto" }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <Tooltip label="send a mail" hasArrow shouldWrapChildren>
            <IconButton
              icon={<GrMail />}
              href="mailto: rodinshrestha@gmail.com"
            />
          </Tooltip>
          <Tooltip label="LinkedIn link" hasArrow shouldWrapChildren>
            <IconButton
              icon={<FaLinkedin />}
              href="https://np.linkedin.com/in/rodin-shrestha-074aa417a"
            />
          </Tooltip>
          <Tooltip label="Github Link" hasArrow shouldWrapChildren>
            <IconButton
              icon={<FaGithubAlt />}
              href="https://github.com/rodinshrestha"
            />
          </Tooltip>
          <Tooltip
            label="Dowload my resume to know me more"
            hasArrow
            shouldWrapChildren
          >
            <IconButton
              icon={<FaDownload />}
              href="/assets/my-cv.pdf"
              download
            />
          </Tooltip>
          <Tooltip
            label={`Switch to ${colorMode === "dark" ? "light" : "dark"}`}
            hasArrow
            shouldWrapChildren
          >
            <ThemeToggle />
          </Tooltip>
        </Stack>
        {/* <Box
          flex={1}
          alignItems="right"
          display={{ base: 'flex', md: 'none' }}
          justifyContent="flex-end">
          <Box ml={2}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>
                  <IconButton icon={<FaLinkedin />} />
                </MenuItem>
                <MenuItem>
                  <ThemeToggle />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Navbar;
