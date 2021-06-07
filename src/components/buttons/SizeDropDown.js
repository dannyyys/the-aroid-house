import {
  FormControl,
  FormLabel,
  Select,
  useNumberInput,
} from "@chakra-ui/react";

export const SizeDropDown = (props) => {
  return (
    <FormControl
      id="variant"
      backgroundColor="background"
      borderRadius="5"
      maxW="150px"
    >
      <Select
        placeholder="Select variant"
        backgroundColor="buttonBackground"
        color="background"
        fontWeight="bold"
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.sizes.map((sizes, i) => {
          return (
            <option value={sizes.size} key={i}>
              {sizes.size}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};
