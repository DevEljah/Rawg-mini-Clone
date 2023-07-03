import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import PlatformIcon from "./PlatformIcon ";

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
            <Image
              src={getCroppedImageUrl(game.background_image)}
              alt="game-image"
            />
            <Box p="6">
              <Box
                fontSize="sm"
                color="gray.500"
                display="flex"
                flexDirection="row"
              >
                {game.platforms.map((platform) => (
                  <div
                    key={platform.platform.id}
                    style={{ marginRight: "5px" }}
                  >
                    <PlatformIcon platformName={platform.platform.name} />
                  </div>
                ))}
              </Box>
              <Box display="flex" alignItems="baseline" mt="4">
                <Text fontWeight="semibold" fontSize="lg" mr="2">
                  {game.name}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
