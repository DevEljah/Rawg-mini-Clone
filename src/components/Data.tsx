import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

const Data = () => {
  const items = [
    { id: 1, name: "game1" },
    { id: 2, name: "game2" },
    { id: 3, name: "game3" },
    { id: 4, name: "game4" },
    { id: 5, name: "game5" },
    { id: 6, name: "game6" },
    { id: 7, name: "game7" },
    { id: 8, name: "game8" },
    { id: 9, name: "game9" },
  ];
  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing={6}>
        {items.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src="https://via.placeholder.com/400x250" />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Text fontWeight="semibold" fontSize="lg" mr="2">
                  {item.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Platform
                </Text>
              </Box>
              <Text mt="2" fontSize="sm">
                Game description goes here...
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Data;
