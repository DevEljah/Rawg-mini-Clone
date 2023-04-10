import { Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Button colorScheme="blue" onClick={() => console.log("Clicked!")}>
        Click me!
      </Button>
    </>
  );
}

export default App;
