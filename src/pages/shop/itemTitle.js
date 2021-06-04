import { Center, Flex, Box } from "@chakra-ui/react";

import { Header } from "../../components/layout/Header";
import { ItemCarousel } from "../../components/item/ItemCarousel";
import { ItemDetails } from "../../components/item/ItemDetails";

function itemTitle() {
  return (
    <Center backgroundColor="background">
      <Flex
        height="100vh"
        direction="column"
        //alignContent="center"
        backgroundColor="background"
        width={["100vw", "60vw"]}
      >
        <Header />
        <Center>
          <ItemCarousel />
        </Center>
        <Flex
          backgroundColor="text"
          height="full"
          borderRadius="20px 20px 0px 0px"
          direction="column"
          //padding="5"
          //marginTop="10"
        >
          <ItemDetails />
        </Flex>
      </Flex>
    </Center>
  );
}

export default itemTitle;
