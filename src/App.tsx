import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { useState } from "react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import GameList from "./components/GameList";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // query object pattern

  return (
    <>
      <Grid
        templateAreas={`"header header" "nav main" "nav footer"`}
        gridTemplateRows={"8vh 1fr 30px"}
        gridTemplateColumns={{ base: "0%", md: "20vh", lg: "30vh 1fr" }}
        h="80vh"
        gap="0"
        fontWeight="bold"
        pl="2"
      >
        <GridItem /* bg="orange.300" */ area={"header"}>
          <Navbar />
        </GridItem>
        <GridItem
          /* bg="pink.300" */
          area={"nav"}
          display={useBreakpointValue({ base: "none", md: "block" })}
        >
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
        <GridItem /* bg="green.300" */ area={"main"}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameList gameQuery={gameQuery} />
        </GridItem>
        <GridItem /* bg="blue.300" */ area={"footer"}>Footer</GridItem>
      </Grid>
    </>
  );
}

export default App;
