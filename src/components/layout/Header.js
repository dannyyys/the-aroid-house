import { Box, Flex, Button, Spacer, Heading } from "@chakra-ui/react";
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
          <Heading
            fontSize="xl"
            fontStyle="italic"
            textDecoration="underline"
            color="text"
          >
            TheAroidHouse
          </Heading>
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
