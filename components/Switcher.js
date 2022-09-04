import Image from "next/image";
import { Center, Text, Heading } from "@chakra-ui/react";

import Y00tLine from "./Y00tLine";

const Switcher = ({ y00tText, y00t, y00tDesc }) => {
  return (
    <>
      <Center h="25vh">
        <Image
          src="/images/y00ts_banner.png"
          alt="y00ts"
          width={300}
          height={100}
        />
      </Center>
      <Y00tLine text={y00tText} bgcolor="#F0D055" color="white" />
      <Y00tLine text={y00tDesc} bgcolor="#FF5B32" color="white" />
      <Y00tLine text="coming soon to earth" bgcolor="#597592" color="white" />
      <Y00tLine text="social experiment" bgcolor="#F0D055" color="white" />
      <Y00tLine text="trying shit" bgcolor="#FF5B32" color="white" />
      <Y00tLine text="learning shit" bgcolor="#597592" color="white" />
      <Y00tLine text="new frontiers" bgcolor="#F0D055" color="white" />
      <Y00tLine text="soon y00ts" bgcolor="#FF5B32" color="white" />
      <Y00tLine text="degenerates, punks, and misfits" bgcolor="#597592" color="white" />
      <Y00tLine text="gods of the metaverse" bgcolor="#F0D055" color="white" />
      <Y00tLine text="masters of our own universe" bgcolor="#FF5B32" color="white" />
    </>
  );
};

export default Switcher;
