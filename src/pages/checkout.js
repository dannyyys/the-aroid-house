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

function checkout() {
  return (
    <Flex
      height="full"
      direction="column"
      //alignContent="center"
      backgroundColor="background"
    >
      <HeaderCheckout />
      <Flex
        backgroundColor="text"
        height="100vh"
        borderRadius="20px 20px 0px 0px"
        direction="column"
        //padding="5"
      >
        <Tabs variant="enclosed" isFitted>
          <TabList>
            <Tab
              textColor="white"
              _selected={{ color: "white", bg: "text" }}
              backgroundColor="secondaryBackground"
              borderRadius="20px 0px 0px 0px"
            >
              One
            </Tab>
            <Tab
              textColor="white"
              _selected={{ color: "white", bg: "text" }}
              backgroundColor="secondaryBackground"
              borderRadius="0px 20px 0px 0px"
            >
              Two
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel color="white">
              <Center>
                <Details />
              </Center>
            </TabPanel>
            <TabPanel color="white" backgroundColor="text">
              <Center>
                <Payment />
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}

export default checkout;
