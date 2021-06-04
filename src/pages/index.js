import { Text, Flex, Heading } from "@chakra-ui/react";
import { React } from "react";
import Link from "next/link";

import { BigButton } from "../components/buttons/BigButton";
import Landing from "../components/Landing";

const Index = () => (
  <Flex
    height="100vh"
    direction="column"
    alignItems="center"
    backgroundColor="background"
  >
    <Heading
      marginTop="20"
      //textDecoration="underline"
      //fontStyle="italic"
      color="text"
    >
      TheAroidHouse
    </Heading>

    <Landing marginTop="10" />

    <Text marginTop="4" fontSize="xl" color="text">
      We try to make gardening simple
    </Text>

    <Link href="/shop">
      <BigButton marginTop="10" name={"Shop"} />
    </Link>
  </Flex>
);

export default Index;
