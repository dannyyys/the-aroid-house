import { Box, Flex, Button, Spacer, Text } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex
      direction="row"
      padding="5"
      align="center"
      backgroundColor="background"
    >
      <Link href="/">
        <Box fontStyle="italic" as="button">
          <Text
            fontStyle="heading"
            fontSize="20"
            fontStyle="italic"
            color="secondaryBackground"
            as="u"
          >
            TheAroidHouse
          </Text>
        </Box>
      </Link>
      <Spacer />
      <Link href="/cart">
        <Button>
          <GrCart />
        </Button>
      </Link>
    </Flex>
  );
};
