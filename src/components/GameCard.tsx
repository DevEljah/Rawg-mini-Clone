import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

import getCroppedImageUrl from "../services/image-url";
import PlatformIcon from "./PlatformIcon ";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="lg" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontWeight="semibold" fontSize="lg" mr="2">
          {game.name}
        </Heading>
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
