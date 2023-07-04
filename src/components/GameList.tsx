import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameList = () => {
  const { games, error } = useGames();

  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing={6}>
        {error && <Text>{error}</Text>}
        {games.map((game) => (
          <Box
            key={game.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <GameCard key={game.id} game={game} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
