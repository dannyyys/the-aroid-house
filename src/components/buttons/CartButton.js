import { chakra, Icon } from "@chakra-ui/react";

import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const CartButton = React.forwardRef(function Cart({ onClick, href }, ref) {
  const [items, setItems] = useContext(CartContext);
  return (
    <span href={href} onClick={onClick} ref={ref}>
      <chakra.span pos="relative" display="inline-block">
        <Icon
          boxSize={6}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="text"
          //color="background"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </Icon>
        <chakra.span
          pos="absolute"
          top="-1px"
          right="-1px"
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          lineHeight="none"
          color="background"
          transform="translate(50%,-50%)"
          bg="text"
          rounded="full"
        >
          {items.reduce((accumulator, cartItem) => {
            return accumulator + cartItem.quantity;
          }, 0)}
        </chakra.span>
      </chakra.span>
    </span>
  );
});

export default CartButton;
