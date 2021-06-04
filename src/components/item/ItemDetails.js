import { chakra, Image, Flex, Center, Spacer, VStack } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { AddMinus } from "../buttons/AddMinus";
import { BigButton } from "../buttons/BigButton";
import { SizeDropDown } from "../buttons/SizeDropDown";

export const ItemDetails = () => {
  return (
    <VStack
      direction="column"
      width={["100vw", "60vw"]}
      padding="5"
      //alignSelf="center"
      align={[null, "center"]}
      spacing="4"
    >
      <chakra.h3
        fontStyle="heading"
        color="background"
        fontSize="3xl"
        fontWeight="bold"
        marginTop="5"
      >
        Slim moss pole
      </chakra.h3>
      <chakra.h3 color="background" fontSize="xl" paddingTop="5">
        Mose pole. damn good blah.
      </chakra.h3>
      <chakra.h3 color="background" fontSize="xl" paddingTop="5">
        Sizes:
      </chakra.h3>
      <Flex
        direction="column"
        justify="space-around"
        //width={["80vw", "20vw"]}
      >
        <Flex direction="row">
          <chakra.h3 color="background" fontSize="xl">
            1M
          </chakra.h3>
          <Spacer />
          <chakra.h3 color="background" fontSize="xl">
            $15
          </chakra.h3>
        </Flex>
        <Flex direction="row">
          <chakra.h3 color="background" fontSize="xl">
            0.5M
          </chakra.h3>
          <Spacer />
          <chakra.h3 color="background" fontSize="xl">
            $10
          </chakra.h3>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        //width={["80vw", "20vw"]}
        justify="space-around"
        paddingTop="3"
      >
        <Flex direction="row" align="center">
          <chakra.h3 color="background" fontSize="lg">
            Quantity
          </chakra.h3>
          <Spacer />
          <AddMinus />
        </Flex>
        <Flex direction="row" align="center" paddingTop="3">
          <chakra.h3 color="background" fontSize="lg">
            Variants
          </chakra.h3>
          <Spacer />
          <SizeDropDown />
        </Flex>
      </Flex>
      <Center paddingTop="5">
        <BigButton name={"Add to cart"} />
      </Center>
    </VStack>
  );
};
