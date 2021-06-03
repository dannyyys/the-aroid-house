import {
  Box,
  Flex,
  Button,
  Spacer,
  Heading,
  chakra,
  Icon,
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import Link from "next/link";
import Cart from "../buttons/Cart";

export const HeaderWhite = () => {
  return (
    <Flex direction="row" padding="5" align="center">
      <Link href="/">
        <Box fontStyle="italic" as="button">
          <Heading
            fontSize="xl"
            fontStyle="italic"
            textDecoration="underline"
            color="background"
          >
            TheAroidHouse
          </Heading>
        </Box>
      </Link>

      <Spacer />

      <Link href="/cart" passHref>
        <Cart />
      </Link>
    </Flex>
  );
};
