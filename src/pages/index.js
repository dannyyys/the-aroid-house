import { Text, Flex, Center } from "@chakra-ui/react";
import { React } from "react";
import Link from "next/link";

import { Layout } from "../components/layout/layout";

import { BigButton } from "../components/buttons/BigButton";
import Landing from "../components/Landing";

const Index = () => (
  <Layout>
    <Center>
      <Flex alignItems="center" direction="column">
        <Text
          fontStyle="heading"
          fontSize="35"
          as="u"
          fontStyle="italic"
          color="secondaryBackground"
        >
          TheAroidHouse
        </Text>
        <Landing />

        <Text
          margin="5"
          fontStyle="body"
          fontSize="20"
          color="secondaryBackground"
        >
          We try to make gardening simple
        </Text>
        <Link href="/shop">
          <BigButton />
        </Link>
      </Flex>
    </Center>
  </Layout>
);

export default Index;
