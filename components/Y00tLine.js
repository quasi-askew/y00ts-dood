import { Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Y00tLine = ({ text, color, bgcolor }) => {
  return (
    <Center
      as={motion.div}
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      bg={bgcolor}
      h="25vh"
      color={color}
      p={3}
      justify="center"
    >
      <Heading as="h2" size="2xl">
        {text}
      </Heading>
    </Center>
  );
};

export default Y00tLine;
