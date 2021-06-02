import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

import Landing from "../components/Landing";
import { BigButton } from "../components/buttons/BigButton";

function NewLanding() {
  return (
    <Flex
      height="100vh"
      direction="column"
      alignItems="center"
      backgroundColor="background"
    >
      <Heading marginTop="40" fontStyle="italic" color="secondaryBackground">
        TheAroidHouse
      </Heading>

      <Landing />

      <Text marginTop="4" fontSize="xl" color="secondaryBackground">
        We try to make gardening simple
      </Text>

      <BigButton marginTop="10" />
    </Flex>
  );
}

export default NewLanding;
