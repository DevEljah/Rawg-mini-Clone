import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";

import { useState } from "react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
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
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={6} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        <GridItem /* bg="blue.300" */ area={"footer"}>Footer</GridItem>
      </Grid>
    </>
  );
}

export default App;
