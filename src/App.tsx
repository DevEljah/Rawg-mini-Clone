import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { useState } from "react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import GameList from "./components/GameList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
        <GridItem /* bg="green.300" */ area={"main"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameList
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
        <GridItem /* bg="blue.300" */ area={"footer"}>Footer</GridItem>
      </Grid>
    </>
  );
}

export default App;
