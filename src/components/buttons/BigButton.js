import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export const BigButton = (props) => {
  return (
    <MotionButton
      backgroundColor="primary"
      textColor="background"
      fontSize="20"
      width="30vw"
      _hover={{
        backgroundColor: "primary",
      }}
      padding="7"
      borderRadius="20"
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      Shop
    </MotionButton>
  );
};
