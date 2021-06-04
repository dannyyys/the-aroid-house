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

const Payment = () => {
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
          Danny
        </chakra.h3>
      </Flex>
      <Flex direction={["column", "row"]}>
        <chakra.h3 fontSize="lg" color="background" textDecoration="underline">
          Contact number
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background" padding="2">
          9558 6659
        </chakra.h3>
      </Flex>
      <Flex direction={["column", "row"]}>
        <chakra.h3 fontSize="lg" color="background" textDecoration="underline">
          Address
        </chakra.h3>
        <Spacer />
        <Box fontSize="md" color="background" padding="2">
          blk 999 tampines ave 6 #12-55 (s)663699
        </Box>
      </Flex>
      <chakra.h3 fontSize="2xl" color="background">
        Items
      </chakra.h3>
      <Divider width={["80vw", "55vw"]} />
      <Item />
      <Item />
      <Flex direction="row" paddingBottom="2" width={["80vw", "55vw"]}>
        <chakra.h3 color="background" fontSize="lg">
          Delivery
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background">
          $10
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
          $40
        </chakra.h3>
      </Flex>
      {/* <Center padding="5">
        <chakra.h3 fontSize="3xl" color="background">
          UUID: danny6659
        </chakra.h3>
      </Center>
      <Instructions /> */}

      <Flex direction="row" paddingTop="5" paddingRight="5">
        <SmallButton name={"Back"} />
        <Spacer />
        <Link href="/thankyou">
          <SmallButton name={"Finish"} />
        </Link>
      </Flex>
    </Flex>
  );
};
export default Payment;
