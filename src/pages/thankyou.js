import {
  Flex,
  chakra,
  Center,
} from "@chakra-ui/react";

import Link from "next/link";

import ThankyouAnimation from "../components/ThankyouAnimation";
import { HeaderCheckout } from "../components/layout/HeaderCheckout";
import { BigButton } from "../components/buttons/BigButton";

function thankyou() {
  return (
    <Center backgroundColor="background">
      <Flex
        height="100vh"
        direction="column"
        backgroundColor="background"
        direction="column"
        width={["100vw", "60vw"]}
      >
        <HeaderCheckout />
        <Flex
          backgroundColor="text"
          height="full"
          borderRadius="20px 20px 0px 0px"
          direction="column"
          padding="5"
          align="center"
        >
          <chakra.h3
            marginTop="4"
            fontSize="xl"
            color="background"
            align="center"
          >
            Thank you for shopping with us. May your plant grow well.
          </chakra.h3>

          <ThankyouAnimation />

          <chakra.h3 marginTop="4" fontSize="xl" color="background">
            Check your email for your invoice.
          </chakra.h3>

          <Link href="/shop">
            <BigButton marginTop="10" name={"Back to shop"} />
          </Link>
        </Flex>
      </Flex>
    </Center>
  );
}

export default thankyou;
