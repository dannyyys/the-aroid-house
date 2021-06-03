import {
  Flex,
  Heading,
  Spacer,
  Button,
  chakra,
  Center,
  Divider,
} from "@chakra-ui/react";

import { SmallButton } from "../components/buttons/SmallButton";
import CartItem from "../components/checkout/CartItem";
import DeliveryOption from "../components/checkout/DeliveryOption";
import { Header } from "../components/layout/Header";
import Link from "next/link";

function ShopItemDetails() {
  return (
    <Flex
      height="100vh"
      direction="column"
      //alignContent="center"
      backgroundColor="background"
    >
      <Header />
      <Flex
        backgroundColor="text"
        height="full"
        borderRadius="20px 20px 0px 0px"
        direction="column"
        padding="5"
      >
        <Heading fontSize="xl" color="white">
          Cart
        </Heading>
        <CartItem />
        <Divider />
        <CartItem />
        <Divider />
        <DeliveryOption />
        <Divider />
        <Flex direction="row" paddingLeft="5" paddingTop="2" width="80vw">
          <chakra.h3 fontSize="md" color="white">
            Total
          </chakra.h3>
          <Spacer />
          <chakra.h3 fontSize="md" color="white">
            $40
          </chakra.h3>
        </Flex>
        <Center paddingTop="5">
          <Link href="/checkout">
            <SmallButton name={"Check Out"} />
          </Link>
        </Center>
      </Flex>
    </Flex>
  );
}

export default ShopItemDetails;
