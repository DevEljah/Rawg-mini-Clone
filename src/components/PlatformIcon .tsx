import { FaXbox, FaPlaystation, FaWindows, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch, BsAndroid, BsApple, BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons/lib";

interface PlatformIconProps {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: PlatformIconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: BsApple,
    linux: FaLinux,
    android: BsAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIcon;
