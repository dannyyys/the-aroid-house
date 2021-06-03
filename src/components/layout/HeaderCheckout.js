import {
  Box,
  Flex,
  Button,
  Spacer,
  Heading,
  chakra,
  Icon,
} from "@chakra-ui/react";

import Link from "next/link";
import CartButton from "../buttons/CartButton";

export const HeaderCheckout = () => {
  return (
    <Flex direction="row" padding="5" align="center">
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
      <Heading fontSize="lg" color="text">
        Check Out
      </Heading>
    </Flex>
  );
};
