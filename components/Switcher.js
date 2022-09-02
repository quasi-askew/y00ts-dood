import Image from "next/image";
import { Center, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Switcher = ({ y00tText, y00t, y00tDesc }) => {
  return (
    <>
      <Center
        bg="black"
        h="25vh"
        pt={10}
      >
        <Image
          src="/images/y00ts_banner.png"
          alt="y00ts"
          width={996}
          height={346}
        />
      </Center>
      <Center bg="#F0D055" h="25vh" color="white">
        <Text>{y00tText}</Text>
      </Center>
      <Center bg="#FF5B32" h="25vh" color="white">
        <Heading as="h1" size="4xl" noOfLines={1}>
          {y00t}
        </Heading>
      </Center>
      <Center bg="#597592" h="25vh" color="white">
        {y00tDesc}
      </Center>
    </>
  );
};

export default Switcher;
