import {
  Flex,
  Spacer,
  chakra,
  Checkbox,
  Divider,
  Formik,
  Form,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Field,
  Button,
  field,
  form,
  Box,
  Center,
} from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";
import { SmallButton } from "../buttons/SmallButton";
import Instructions from "./Instructions";
import Item from "./Item";
import Link from "next/link";
import { PaymentContext } from "../../context/PaymentContext";
import React, { useState, useContext, useEffect } from "react";

const Payment = (props) => {
  var name;
  var email;
  var address;
  var number;

  const [paymentItem, setPaymentItem] = useContext(PaymentContext);
  //console.log(paymentItem[0]["items"]);

  // const addPaymentItem = (e) => {
  //   //setPaymentItem({ firstName, lastName, email, address, phone });
  //   setPaymentItem(paymentItem);
  //   //console.log(paymentItem);
  // };

  // useEffect(() => {
  //   addPaymentItem();
  // }, [paymentItem]);

  const handleRemove = () => {
    const newList = paymentItem.filter(
      (item) => paymentItem.indexOf(item) !== 1
    );
    //console.log(newList);

    setPaymentItem(newList);
  };

  // useEffect(() => {
  //   name = paymentItem[1].firstName + " " + paymentItem[1].lastName;
  //   email = paymentItem[1].email;
  //   address = paymentItem[1].address;
  //   number = paymentItem[1].phone;
  // }, [paymentItem]);

  return (
    <Flex
      direction="column"
      paddingLeft={["5", "0"]}
      paddingTop="2"
      paddingBottom="2"
      height="full"
      //backgroundColor="text"

      width={["100vw", "55vw"]}
    >
      <Flex direction={["column", "row"]}>
        <chakra.h3 fontSize="lg" color="background" textDecoration="underline">
          Name
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background" padding="2">
          {props.firstName}
        </chakra.h3>
      </Flex>
      <Flex direction={["column", "row"]}>
        <chakra.h3 fontSize="lg" color="background" textDecoration="underline">
          Contact number
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background" padding="2">
          {props.phone}
        </chakra.h3>
      </Flex>
      <Flex direction={["column", "row"]}>
        <chakra.h3 fontSize="lg" color="background" textDecoration="underline">
          Email
        </chakra.h3>
        <Spacer />
        <Box fontSize="md" color="background" padding="2">
          {props.email}
        </Box>
      </Flex>
      <Flex direction={["column", "row"]}>
        <chakra.h3 fontSize="lg" color="background" textDecoration="underline">
          Address
        </chakra.h3>
        <Spacer />
        <Box fontSize="md" color="background" padding="2">
          {props.address}
        </Box>
      </Flex>
      <chakra.h3 fontSize="2xl" color="background">
        Items
      </chakra.h3>
      <Divider width={["80vw", "55vw"]} />

      {props.paymentItem[0].items.map((item, i) => {
        return <Item item={item} key={i} index={i} />;
      })}

      {/* <Item />
      <Item /> */}
      <Flex direction="row" paddingBottom="2" width={["80vw", "55vw"]}>
        <chakra.h3 color="background" fontSize="lg">
          Delivery
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background">
          ${props.paymentItem[0].deliveryCost}
        </chakra.h3>
      </Flex>
      <Divider width={["80vw", "55vw"]} />
      <Flex
        direction="row"
        paddingLeft="5"
        paddingTop="2"
        width={["80vw", "55vw"]}
      >
        <chakra.h3 fontSize="md" color="background">
          Total
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background">
          $
          {props.paymentItem[0].items.reduce((accumulator, cartItem) => {
            return accumulator + cartItem.price;
          }, 0) + props.paymentItem[0].deliveryCost}
        </chakra.h3>
      </Flex>
      {/* <Center padding="5">
        <chakra.h3 fontSize="3xl" color="background">
          UUID: danny6659
        </chakra.h3>
      </Center>
      <Instructions /> */}

      <Flex
        direction="row"
        paddingTop="5"
        paddingRight="5"
        justifyContent="space-between"
      >
        <SmallButton
          name={"Back"}
          onClick={() => {
            props.setTabIndex(0);
            handleRemove();
          }}
        />
        <Link href="/thankyou">
          <SmallButton name={"Finish"} />
        </Link>
      </Flex>
    </Flex>
  );
};
export default Payment;
