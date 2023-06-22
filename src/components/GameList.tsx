import { useState, useEffect } from "react";
import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

import getCroppedImageUrl from "../services/image-url";
import apiClient from "../utils/apiClient";
import PlatformIcon from "./PlatformIcon ";
interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  platforms: { platform: { id: number; name: string } }[];
}
interface FetchGamesRes {
  count: number;
  results: Game[];
}

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchGamesRes>("/games")
      .then((res) => setGames(res.data.results));
    console.log(games);
  }, []);

  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing={6}>
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

// I set the state with response.data.results instead of just response.data. This is because the data object returned by the RAWG.io API contains additional metadata about the API response, such as the number of total results and the current page number. The actual game data is nested within the results key of the data object.

// By setting the state with response.data.results, we are only storing the actual game data in the state, rather than including all the metadata as well. This can make it easier to work with the data in our React component, and can also help reduce memory usage by only storing the necessary data.

// If we were to set the state with response.data instead, our games state would contain all the metadata as well, which could make it harder to work with and could also increase memory usage unnecessarily.
