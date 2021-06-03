import { Center, Flex } from "@chakra-ui/react";

import { Layout } from "../../components/layout/layout";
import { Header } from "../../components/layout/Header";
import { ItemCarousel } from "../../components/item/ItemCarousel";

function itemTitle() {
  return (
    <Center backgroundColor="background">
      <Flex
        height="full"
        direction="column"
        //alignContent="center"
        backgroundColor="background"
        width={["100vw", "60vw"]}
      >
        <Header />
        <ItemCarousel />
        {/* <Flex
        backgroundColor="text"
        height="100vh"
        borderRadius="20px 20px 0px 0px"
        direction="column"
        //padding="5"
      ></Flex> */}
      </Flex>
    </Center>
  );
}

export default itemTitle;
