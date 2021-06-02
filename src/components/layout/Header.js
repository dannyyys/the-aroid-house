import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
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
        <Box
          fontStyle="heading"
          fontSize="20"
          as="u"
          fontStyle="italic"
          color="secondaryBackground"
        >
          TheAroidHouse
        </Box>
      </Link>
      <Spacer />
      <Link href="/cart">
        <Button leftIcon={<GrCart />} />
      </Link>
    </Flex>
  );
};
