import {
  chakra,
  Image,
  Flex,
  Center,
  Spacer,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { AddMinus } from "../buttons/AddMinus";
import { BigButton } from "../buttons/BigButton";
import { SizeDropDown } from "../buttons/SizeDropDown";
import { CartContext } from "../../context/CartContext";
import React, { useState, useContext, useEffect } from "react";

export const ItemDetails = () => {
  const toast = useToast();
  const itemID = 5;
  const itemName = "Slim moss pole";
  const itemDescription = "Mose pole. damn good blah.";
  const sizes = [
    {
      size: "1M",
      price: "$15",
    },
    {
      size: "0.5M",
      price: "$10",
    },
  ];
  const variant = {
    "1M": "15",
    "0.5M": "10",
  };

  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [items, setItems] = useContext(CartContext);

  const updateID = (e) => {
    setID(itemID);
  };

  const updateName = (e) => {
    setName(itemName);
  };

  const updateSize = (size) => {
    // console.log("i was clicked", size);
    setSize(size);
  };

  const updatPrice = (price) => {
    console.log(price);
    setPrice(price);
  };

  const updateQuantity = (quantity) => {
    // setPrice(e.target.value);
    setQuantity(quantity);
    //console.log(quantity);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (size != "") {
      setItems((prevItems) => [
        ...prevItems,
        { id, name, size, quantity, price },
      ]);
      toast({
        title: "Item added",
        description: "Item successfully added to cart",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "No vairant",
        description: "Please select a variant",
        status: "warning",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    }
  };
  //setName(itemName);

  useEffect(() => {
    setID(itemID);
    setName(itemName);
  }, []);

  useEffect(() => {
    const price = quantity * variant[size];

    updatPrice(price);
  }, [size, quantity]);

  return (
    <VStack
      direction="column"
      width={["100vw", "60vw"]}
      padding="5"
      //alignSelf="center"
      align={[null, "center"]}
      spacing="4"
    >
      <chakra.h3
        fontStyle="heading"
        color="background"
        fontSize="3xl"
        fontWeight="bold"
        marginTop="5"
      >
        {itemName}
      </chakra.h3>
      <Text color="background" fontSize="xl" paddingTop="5">
        {itemDescription}
      </Text>
      <Text color="background" fontSize="xl" paddingTop="5">
        Sizes:
      </Text>
      <Flex
        direction="column"
        justify="space-around"
        //width={["80vw", "20vw"]}
      >
        {/* {sizes.map((sizes, i) => {
          return (
            <Flex key={i} direction="row">
              <Text color="background" fontSize="xl">
                {sizes.size}
              </Text>
              <Spacer />
              <Text color="background" fontSize="xl">
                {sizes.price}
              </Text>
            </Flex>
          );
        })} */}
        {Object.keys(variant).map((keyName, i) => {
          return (
            <Flex key={i} direction="row">
              <Text color="background" fontSize="xl">
                {keyName}
              </Text>
              <Spacer />
              <Text color="background" fontSize="xl">
                ${variant[keyName]}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        direction="column"
        //width={["80vw", "20vw"]}
        justify="space-around"
        paddingTop="3"
      >
        <Flex direction="row" align="center">
          <Text color="background" fontSize="lg">
            Quantity
          </Text>
          <Spacer />
          <AddMinus onChange={updateQuantity} />
        </Flex>
        <Flex direction="row" align="center" paddingTop="3">
          <Text color="background" fontSize="lg">
            Variants
          </Text>
          <Spacer />
          <SizeDropDown
            //sizes={sizes}
            variant={variant}
            onChange={updateSize}
          />
        </Flex>
      </Flex>
      <Center paddingTop="5">
        <BigButton name={"Add to cart"} onClick={addItem} />
      </Center>
    </VStack>
  );
};
