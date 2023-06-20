import React from "react";
import { FaXbox, FaPlaystation, FaWindows, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch, BsAndroid, BsApple } from "react-icons/bs";

interface PlatformIconProps {
  platformName: string;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ platformName }) => {
  if (platformName === "Xbox Series S/X") {
    return <FaXbox />;
  } else if (platformName === "PlayStation 5") {
    return <FaPlaystation />;
  } else if (platformName === "PC") {
    return <FaWindows />;
  } else if (platformName === "Nintendo Switch") {
    return <BsNintendoSwitch />;
  } else if (platformName === "macOS" || platformName === "iOS") {
    return <BsApple />;
  } else if (platformName === "Linux") {
    return <FaLinux />;
  } else if (platformName === "Android") {
    return <BsAndroid />;
  } else {
    return null;
  }
};
export default PlatformIcon;
