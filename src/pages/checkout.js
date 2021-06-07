import { useState } from "react";
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
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => setTabIndex(index);

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
                  <Details setTabIndex={setTabIndex} />
                </Center>
              </TabPanel>
              <TabPanel color="background" backgroundColor="text">
                <Center>
                  <Payment setTabIndex={setTabIndex} />
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
