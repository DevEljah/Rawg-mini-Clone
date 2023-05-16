import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import GenreList from "./components/GenreList";

function App() {
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
          <GenreList />
        </GridItem>
        <GridItem pl="2" /* bg="green.300" */ area={"main"}>
          <Main />
        </GridItem>
        <GridItem pl="2" /* bg="blue.300" */ area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
