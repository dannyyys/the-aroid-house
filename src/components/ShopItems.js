import Link from "next/link";
import { Button, Container, Stack } from "@chakra-ui/react";

import ShopItemCard from "./cards/ShopItemCard";

const ShopItems = () => {
  return (
    <Container marginTop="6">
      <Stack
        direction={["column", "row"]}
        w="full"
        alignItems="center"
        justifyContent="center"
        spacing="6"
      >
        <Link href="/shop/itemTitle" passHref>
          <ShopItemCard />
        </Link>
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
        <ShopItemCard />
      </Stack>
    </Container>
  );
};

export default ShopItems;
