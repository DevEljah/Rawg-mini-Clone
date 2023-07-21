import {
  Box,
  Flex,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

import logo from "../assets/react.svg";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
      >
        <Box>
          <img src={logo} alt="Logo" />
        </Box>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) console.log(ref.current.value);
          }}
        >
          <InputGroup width={{ base: "50%", md: "80% " }}>
            <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            <Input
              ref={ref}
              type="text"
              placeholder="Search"
              rounded="full"
              overflow="hidden"
              sx={{
                '&[type="text"]': {
                  width: "100%",
                  _placeholder: {
                    color: "gray.500",
                  },
                },
              }}
            />
          </InputGroup>
        </form>
        <Button
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle navigation"
          sx={{ "&:hover": { bg: "transparent" } }}
        >
          {colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
        </Button>
      </Flex>
    </>
  );
}

export default Navbar;

// If you want the search-bar to look Identical with "rawg.io"
// use the following code:
{
  /* <Input type="text" placeholder="Search" bg="#333333" rounded="full"
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
/>; */
}
