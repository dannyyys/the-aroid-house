import { Flex, Spacer, chakra, Box, Divider } from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";
import { ItemCarousel } from "../item/ItemCarousel";
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = (props) => {
  //const [items, setItems] = useContext(CartContext);
  //console.log(props);

  return (
    <Box>
      <Flex direction="row" align="center">
        <Flex direction="column" width="80vw" paddingBottom="2">
          <Flex direction="row" paddingLeft="5" align="center">
            <chakra.h3 fontSize="md" color="background" paddingTop="2">
              {props.item.name}
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              {props.item.price}
            </chakra.h3>
          </Flex>

          <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
            <chakra.h3 fontSize="md" color="background">
              Quantity
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              {props.item.quantity}
            </chakra.h3>
          </Flex>
          <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
            <chakra.h3 fontSize="md" color="background">
              Size
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              {props.item.size}
            </chakra.h3>
          </Flex>
        </Flex>
        <Spacer />
        <DeleteButton onClick={() => props.handleRemove(props.index)} />
      </Flex>
      <Divider />
    </Box>
  );
};
export default CartItem;
