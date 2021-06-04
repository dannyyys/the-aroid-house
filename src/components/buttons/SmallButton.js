import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export const SmallButton = (props) => {
  return (
    <MotionButton
      backgroundColor="buttonBackground"
      textColor="background"
      fontSize="lg"
      width={["30vw", "25vw"]}
      _hover={{
        backgroundColor: "buttonBackgroundHover",
      }}
      padding="7"
      borderRadius="5"
      whileHover={{ scale: 1.1 }}
      fontWeight="bold"
      {...props}
    >
      {props.name}
    </MotionButton>
  );
};
