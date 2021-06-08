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
        {/* {props.sizes.map((sizes, i) => {
          return (
            <option value={sizes.size} key={i}>
              {sizes.size}
            </option>
          );
        })} */}
        {Object.keys(props.variant).map((keyName, i) => {
          return (
            // <Flex key={i} direction="row">
            //   <Text color="background" fontSize="xl">
            //     {keyName}
            //   </Text>
            //   <Spacer />
            //   <Text color="background" fontSize="xl">
            //     ${variant[keyName]}
            //   </Text>
            // </Flex>
            <option value={keyName} key={i}>
              {keyName}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};
