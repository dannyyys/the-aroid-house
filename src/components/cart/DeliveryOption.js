import {
  Flex,
  Spacer,
  chakra,
  Checkbox,
  Divider,
  Box,
  RadioGroup,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";
import { useState } from "react";

const DeliveryOption = (props) => {
  const [boxIndex, setBoxIndex] = useState(0);

  return (
    <Box>
      <Flex
        direction="column"
        paddingLeft="5"
        width={["80vw", "57vw"]}
        paddingTop="2"
        paddingBottom="2"
      >
        <Flex direction="row">
          <Checkbox
            color="background"
            size="lg"
            onChange={() => {
              setBoxIndex(0);
              props.onChange(0);
            }}
            isChecked={boxIndex == 0}
          >
            Self collect
          </Checkbox>
          <Spacer />
          <Text fontSize="md" color="background" hidden={boxIndex == 1}>
            $0
          </Text>
        </Flex>
        <Flex direction="row">
          <Checkbox
            color="background"
            size="lg"
            onChange={() => {
              setBoxIndex(1);
              props.onChange(1);
            }}
            isChecked={boxIndex == 1}
          >
            Delivery
          </Checkbox>
          <Spacer />

          <Text fontSize="md" color="background" hidden={boxIndex == 0}>
            $10
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </Box>
  );
};
export default DeliveryOption;
