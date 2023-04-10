import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsToggleOn } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import logo from "../assets/react.svg";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="gray.800"
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
          bg="#fff"
          rounded="full"
          overflow="hidden"
        />
      </InputGroup>
      <IconButton
        icon={<BsToggleOn />}
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
