import { Center, Flex } from "@chakra-ui/react";
import { Header } from "../../components/layout/Header";
import ShopItems from "../../components/ShopItems";

const Shop = () => (
  <Center backgroundColor="background">
    <Flex
      direction="column"
      width={["100vw", "60vw"]}
      backgroundColor="background"
    >
      <Header />
      <ShopItems />
    </Flex>
  </Center>
);

export default Shop;
