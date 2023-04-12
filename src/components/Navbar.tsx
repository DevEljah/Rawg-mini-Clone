import {
  Box,
  Flex,
  useColorMode,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsToggleOn } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import logo from "../assets/react.svg";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      color="black"
    >
      <Box>
        <img src={logo} alt="Logo" />
      </Box>
      <InputGroup width="80%">
        <InputLeftElement pointerEvents="none" children={<FaSearch />} />
        <Input
          type="text"
          placeholder="Search"
          bg="#333333"
          rounded="full"
          overflow="hidden"
          sx={{
            '&[type="text"]': {
              border: "none",
              boxShadow: "none",
              width: "100%",
              _placeholder: {
                color: "gray.500",
              },
            },
            _hover: {
              bg: "#fff",
            },
            _focus: {
              bg: "#fff",
            },
          }}
        />
      </InputGroup>

      <IconButton
        icon={<BsToggleOn onClick={toggleColorMode} />}
        size="lg"
        variant="ghost"
        aria-label="Toggle navigation"
        color="#fff"
        sx={{ "&:hover": { bg: "transparent" } }}
      />
    </Flex>
  );
}

export default Navbar;
