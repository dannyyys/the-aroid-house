import { HStack, Button, Input, useNumberInput } from "@chakra-ui/react";

export const AddMinus = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      //max: 6,
      //precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack maxW="150px" backgroundColor="background" borderRadius="5">
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};
