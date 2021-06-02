import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export const BigButton = (props) => {
  return (
    <MotionButton
      backgroundColor="primary"
      textColor="background"
      fontSize="lg"
      width="25vw"
      _hover={{
        backgroundColor: "#CC9400",
      }}
      padding="7"
      borderRadius="5"
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      Shop
    </MotionButton>
  );
};
