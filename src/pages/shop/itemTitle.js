import { Center, Flex, Box } from "@chakra-ui/react";

import { Layout } from "../../components/layout/layout";
import { Header } from "../../components/layout/Header";
import { ItemCarousel } from "../../components/item/ItemCarousel";
import { ItemDetails } from "../../components/item/ItemDetails";

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
        {/* <Box>
          <ItemCarousel />
        </Box> */}
        <Flex
          backgroundColor="text"
          height="100vh"
          borderRadius="20px 20px 0px 0px"
          direction="column"
          //padding="5"
        >
          <ItemDetails />
        </Flex>
      </Flex>
    </Center>
  );
}

export default itemTitle;
