import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import data from "./data/genres";

const GameCard = () => {
  return (
    <>
      <div>
        {data.map((items) => (
          <SimpleGrid
            key={items.id}
            columns={{ sm: 2, md: 2, lg: 3 }}
            spacing={6}
          >
            {items.games.map((game) => (
              <Box
                key={game.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="https://via.placeholder.com/400x250"
                  alt="game-image"
                />
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Text fontWeight="semibold" fontSize="lg" mr="2">
                      {game.name}
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
        ))}
      </div>
    </>
  );
};

export default GameCard;
