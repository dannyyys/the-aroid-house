import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  chakra,
  Icon,
  Center,
  Divider,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import DeleteButton from "../components/buttons/DeleteButton";
import { SmallButton } from "../components/buttons/SmallButton";
import CartItem from "../components/cart/CartItem";
import DeliveryOption from "../components/cart/DeliveryOption";
import { HeaderCheckout } from "../components/layout/HeaderCheckout";
import Link from "next/link";
import Details from "../components/checkout/Details";
import Payment from "../components/checkout/Payment";
import { PaymentContext } from "../context/PaymentContext";
import React, { useState, useContext, useEffect } from "react";

function checkout() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => setTabIndex(index);

  const [paymentItem, setPaymentItem] = useContext(PaymentContext);

  const [firstName, setFirstName] = useState("dan");
  const [lastName, setLastName] = useState("asd");
  const [email, setEmail] = useState("qwe@gmail.com");
  const [address, setAddress] = useState("blkddd");
  const [phone, setPhone] = useState(0);

  const updateFirstName = (e) => {
    setFirstName(itemID);
  };
  const updateLastName = (e) => {
    setLastName(itemID);
  };
  const updateEmail = (e) => {
    setEmail(itemID);
  };
  const updateAddress = (e) => {
    setAddress(itemID);
  };
  const updatePhone = (e) => {
    setPhone(itemID);
  };

  const addPaymentItem = (e) => {
    //setPaymentItem({ firstName, lastName, email, address, phone });
    setPaymentItem((prevItems) => [
      ...prevItems,
      { firstName, lastName, email, address, phone },
    ]);
    console.log(paymentItem);
  };

  return (
    <Center backgroundColor="background">
      <Flex
        height="full"
        direction="column"
        //alignContent="center"
        backgroundColor="background"
        direction="column"
        width={["100vw", "60vw"]}
      >
        <HeaderCheckout />
        <Flex
          backgroundColor="text"
          height="100vh"
          borderRadius="20px 20px 0px 0px"
          direction="column"
          //padding="5"
        >
          <Tabs
            variant="enclosed"
            isFitted
            index={tabIndex}
            onChange={handleTabsChange}
          >
            <TabList>
              <Tab
                textColor="background"
                _selected={{ color: "background", bg: "text" }}
                backgroundColor="secondaryBackground"
                borderRadius="20px 0px 0px 0px"
                isDisabled={tabIndex == 1}
              >
                Contact
              </Tab>
              <Tab
                textColor="background"
                _selected={{ color: "background", bg: "text" }}
                backgroundColor="secondaryBackground"
                borderRadius="0px 20px 0px 0px"
                isDisabled={tabIndex == 0}
              >
                Payment
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel color="background">
                <Center>
                  <Details
                    setTabIndex={setTabIndex}
                    addPaymentItem={addPaymentItem}
                  />
                </Center>
              </TabPanel>
              <TabPanel color="background" backgroundColor="text">
                <Center>
                  <Payment
                    setTabIndex={setTabIndex}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    address={address}
                    phone={phone}
                  />
                </Center>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Center>
  );
}

export default checkout;
