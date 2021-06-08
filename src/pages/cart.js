import {
  Flex,
  Heading,
  Spacer,
  Button,
  chakra,
  Center,
  Divider,
  useToast,
} from "@chakra-ui/react";

import { SmallButton } from "../components/buttons/SmallButton";
import CartItem from "../components/cart/CartItem";
import DeliveryOption from "../components/cart/DeliveryOption";
import { Header } from "../components/layout/Header";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { PaymentContext } from "../context/PaymentContext";

function cart() {
  const toast = useToast();
  const [items, setItems] = useContext(CartContext);
  const [paymentItem, setPaymentItem] = useContext(PaymentContext);

  const [deliveryCost, setDeliveryCost] = useState(0);

  const updateDeliveryCost = (index) => {
    if (index == 0) {
      setDeliveryCost(0);
    } else {
      setDeliveryCost(10);
    }
  };

  const handleRemove = (id) => {
    const newList = items.filter((item) => items.indexOf(item) !== id);
    //console.log(newList);

    setItems(newList);
    toast({
      title: "Item deleted",
      description: "Item successfully deleted from cart",
      status: "warning",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  const addPaymentItem = (e) => {
    //e.preventDefault();
    if (items.length == 0) {
      toast({
        title: "Cart is empty",
        description: "No item in cart",
        status: "warning",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    } else {
      setPaymentItem([{ items, deliveryCost }]);
      console.log(paymentItem);
    }
  };

  // useEffect(
  //   () => {
  //     addPaymentItem();
  //   },
  //   [items],
  //   [deliveryCost]
  // );

  return (
    <Center backgroundColor="background">
      <Flex
        height="100vh"
        direction="column"
        //alignContent="center"
        backgroundColor="background"
        direction="column"
        width={["100vw", "60vw"]}
      >
        <Header />
        <Flex
          backgroundColor="text"
          height="full"
          borderRadius="20px 20px 0px 0px"
          direction="column"
          padding="5"
        >
          <Heading fontSize="xl" color="background">
            Cart
          </Heading>

          {items.map((item, i) => {
            return (
              <CartItem
                item={item}
                key={i}
                handleRemove={handleRemove}
                index={i}
              />
            );
          })}

          <DeliveryOption onChange={updateDeliveryCost} />

          <Flex
            direction="row"
            paddingLeft="5"
            paddingTop="2"
            width={["80vw", "57vw"]}
          >
            <chakra.h3 fontSize="md" color="background">
              Total
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              $
              {items.reduce((accumulator, cartItem) => {
                return accumulator + cartItem.price;
              }, 0) + deliveryCost}
            </chakra.h3>
          </Flex>
          <Flex paddingTop="5" justifyContent="flex-end">
            <Link href={items.length == 0 ? "" : "/checkout"}>
              <SmallButton
                name={"Check Out"}
                // onClick={() => {
                //   addPaymentItem;

                // }}
                onClick={addPaymentItem}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}

export default cart;
