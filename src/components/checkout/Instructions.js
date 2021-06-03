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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";

const Instructions = () => {
  return (
    <Flex
      direction="column"
      paddingLeft="2"
      width="80vw"
      paddingTop="2"
      paddingBottom="2"
    >
      <chakra.h3 fontSize="xl" color="background" textDecoration="underline">
        To complete transaction
      </chakra.h3>
      <UnorderedList>
        <ListItem>Please transfer the amount to 9445 9999</ListItem>
        <ListItem>
          Enter UUID above in as the description of the transaction
        </ListItem>
        <ListItem>
          Any transaction without UUID will be deemed as a failure
        </ListItem>
        <ListItem>No refunds will be entertained</ListItem>
      </UnorderedList>
    </Flex>
  );
};
export default Instructions;
