import React from "react";
import { Image, Box, Flex, chakra } from "@chakra-ui/react";

const ShopItemIndividualCard = React.forwardRef(function ShopItemIndividualCard(
  { onClick, href },
  ref
) {
  return (
    <span href={href} onClick={onClick} ref={ref}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="xs"
        mx="auto"
      >
        <chakra.span
          bg="gray.300"
          h="full"
          w="full"
          rounded="lg"
          shadow="md"
          overflow="hidden"
        >
          <Image width="100%" height="100%" src="/image.png" />
        </chakra.span>
        <chakra.span
          w={{ base: 56, md: 64 }}
          backgroundColor="background"
          // mt={-20}
          // mr={15}
          shadow="lg"
          //rounded="lg"
          borderRadius="25px 0px 10px 0px"
          overflow="hidden"
          transform={["translate(22%,-100%)", "translate(13%,-100%)"]}
          // transform="translate(13%,-100%)"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            textColor="text"
            letterSpacing={1}
          >
            Moss Plant
          </chakra.h3>
          <Flex
            alignItems="center"
            justifyContent="space-around"
            py={2}
            px={3}
            backgroundColor="secondaryBackground"
          >
            <chakra.span fontWeight="bold" textColor="text">
              From $29
            </chakra.span>
          </Flex>
        </chakra.span>
      </Flex>
    </span>
  );
});

export default ShopItemIndividualCard;
