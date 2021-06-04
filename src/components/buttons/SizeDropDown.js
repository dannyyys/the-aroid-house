import {
  FormControl,
  FormLabel,
  Select,
  useNumberInput,
} from "@chakra-ui/react";

export const SizeDropDown = () => {
  return (
    <FormControl
      id="country"
      backgroundColor="background"
      borderRadius="5"
      maxW="150px"
    >
      {/* <FormLabel>Country</FormLabel> */}
      <Select
        placeholder="Select variant"
        backgroundColor="buttonBackground"
        color="background"
        fontWeight="bold"
      >
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </Select>
    </FormControl>
  );
};
