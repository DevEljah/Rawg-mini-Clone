import { useState, useEffect } from "react";
import { FaXbox, FaPlaystation, FaWindows, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch, BsAndroid, BsApple } from "react-icons/bs";
import axios from "axios";
import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
// import data from "./data/genres";
interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  platforms: { platform: { id: number; name: string } }[];
}

const getPlatformIcon = (platformName: string) => {
  switch (platformName) {
    case "Xbox Series S/X":
    case "Xbox One":
    case "Xbox 360":
      return <FaXbox />;
    case "PlayStation 5":
    case "PlayStation 4":
    case "PlayStation 3":
    case "PS Vita":
    case "PSP":
      return <FaPlaystation />;
    case "PC":
      return <FaWindows />;
    case "Nintendo Switch":
      return <BsNintendoSwitch />;
    case "macOS":
    case "iOS":
      return <BsApple />;
    case "Linux":
      return <FaLinux />;
    case "Android":
      return <BsAndroid />;
    default:
      return null;
  }
};

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

    // const DATES = "2016-09-01,2022-09-30";
    // Replace with your desired date range

    const fetchGames = async () => {
      const response = await axios.get("https://api.rawg.io/api/games", {
        params: {
          key: API_KEY,
          // dates: DATES,
        },
      });
      // console.log(response.data);
      setGames(response.data.results);
    };
    fetchGames();
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
            <Image src={game.background_image} alt="game-image" />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Text fontWeight="semibold" fontSize="lg" mr="2">
                  {game.name}
                </Text>
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
                      {getPlatformIcon(platform.platform.name)}
                    </div>
                  ))}
                </Box>
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

export default GameList;

// I set the state with response.data.results instead of just response.data. This is because the data object returned by the RAWG.io API contains additional metadata about the API response, such as the number of total results and the current page number. The actual game data is nested within the results key of the data object.

// By setting the state with response.data.results, we are only storing the actual game data in the state, rather than including all the metadata as well. This can make it easier to work with the data in our React component, and can also help reduce memory usage by only storing the necessary data.

// If we were to set the state with response.data instead, our games state would contain all the metadata as well, which could make it harder to work with and could also increase memory usage unnecessarily.
