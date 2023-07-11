import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { useState } from "react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import GameList from "./components/GameList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid
        templateAreas={`"header header" "nav main" "nav footer"`}
        gridTemplateRows={"8vh 1fr 30px"}
        gridTemplateColumns={{ base: "0%", md: "20vh", lg: "30vh 1fr" }}
        h="80vh"
        gap="0"
        fontWeight="bold"
      >
        <GridItem pl="2" /* bg="orange.300" */ area={"header"}>
          <Navbar />
        </GridItem>
        <GridItem
          pl="2"
          /* bg="pink.300" */
          area={"nav"}
          display={useBreakpointValue({ base: "none", md: "block" })}
        >
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
        <GridItem pl="2" /* bg="green.300" */ area={"main"}>
          <GameList selectedGenre={selectedGenre} />
        </GridItem>
        <GridItem pl="2" /* bg="blue.300" */ area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
