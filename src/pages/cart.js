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
import CartItem from "../components/cart/CartItem";
import DeliveryOption from "../components/cart/DeliveryOption";
import { Header } from "../components/layout/Header";
import Link from "next/link";

function cart() {
  return (
    <Center backgroundColor="background">
      <Flex
        height="100vh"
        direction="column"
        //alignContent="center"
        backgroundColor="background"
        direction="column"
        width={["100vw", "60vw"]}
      >
        <Header />
        <Flex
          backgroundColor="text"
          height="full"
          borderRadius="20px 20px 0px 0px"
          direction="column"
          padding="5"
        >
          <Heading fontSize="xl" color="background">
            Cart
          </Heading>
          <CartItem />

          <CartItem />

          <DeliveryOption />

          <Flex
            direction="row"
            paddingLeft="5"
            paddingTop="2"
            width={["80vw", "57vw"]}
          >
            <chakra.h3 fontSize="md" color="background">
              Total
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              $40
            </chakra.h3>
          </Flex>
          <Flex paddingTop="5" justifyContent="flex-end">
            <Link href="/checkout">
              <SmallButton name={"Check Out"} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}

export default cart;
