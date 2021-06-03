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
  Center,
} from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";
import { SmallButton } from "../buttons/SmallButton";

const Details = () => {
  return (
    <Flex
      direction="column"
      //paddingLeft="2"
      width="80vw"
      paddingTop="2"
      paddingBottom="2"
      height="full"
    >
      <chakra.h3 fontSize="xl" color="white">
        Contact details
      </chakra.h3>
      <Flex direction="row" padding="2" align="center">
        <chakra.h3 fontSize="md" color="white">
          Name
        </chakra.h3>
        <Spacer />
        <Input //placeholder="medium size"
          size="sm"
          width="50vw"
          backgroundColor="white"
          border="1px"
          borderColor="black"
        />
      </Flex>
      <Flex direction="row" align="center" padding="2">
        <chakra.h3 fontSize="md" color="white">
          Contact
        </chakra.h3>
        <Spacer />
        <Input
          //placeholder="medium size"
          size="sm"
          width="50vw"
          backgroundColor="white"
          border="1px"
          borderColor="black"
        />
      </Flex>
      <Flex direction="row" padding="2" align="center">
        <chakra.h3 fontSize="md" color="white">
          Email
        </chakra.h3>
        <Spacer />
        <Input
          //placeholder="medium size"
          size="sm"
          width="50vw"
          backgroundColor="white"
          border="1px"
          borderColor="black"
        />
      </Flex>
      <Flex direction="row" padding="2" align="center">
        <chakra.h3 fontSize="md" color="white">
          Address
        </chakra.h3>
        <Spacer />
        <Input
          //placeholder="medium size"
          size="sm"
          width="50vw"
          backgroundColor="white"
          border="1px"
          borderColor="black"
        />
      </Flex>
      <Center paddingTop="5">
        <SmallButton name={"Next"} />
      </Center>
    </Flex>
  );
};
export default Details;
