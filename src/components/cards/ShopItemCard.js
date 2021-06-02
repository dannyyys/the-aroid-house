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
        <Box
          bg="gray.300"
          h="full"
          w="full"
          rounded="lg"
          shadow="md"
          overflow="hidden"
        >
          <Image width="100%" height="100%" src="/image.png" />
        </Box>
        <Box
          w={{ base: 56, md: 64 }}
          backgroundColor="background"
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
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
        </Box>
      </Flex>
    </span>
  );
});

export default ShopItemIndividualCard;
