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
} from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";

const Details = () => {
  return (
    <Flex
      direction="column"
      paddingLeft="2"
      width="80vw"
      paddingTop="2"
      paddingBottom="2"
    >
      <chakra.h3 fontSize="xl" color="white">
        Contact details
      </chakra.h3>
      <Flex direction="row">
        <chakra.h3 fontSize="md" color="white">
          Name
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="white">
          Name
        </chakra.h3>
      </Flex>
    </Flex>
  );
};
export default Details;
