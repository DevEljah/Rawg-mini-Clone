import { Game } from "../hooks/useGames";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";

import getCroppedImageUrl from "../services/image-url";
import PlatformIcon from "./PlatformIcon ";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Box p="6">
          <Box
            fontSize="sm"
            color="gray.500"
            display="flex"
            flexDirection="row"
          >
            {game.platforms.map((platform) => (
              <div key={platform.platform.id} style={{ marginRight: "5px" }}>
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
      </CardBody>
    </Card>
  );
};

export default GameCard;
