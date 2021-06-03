import { Flex, Spacer, chakra, Checkbox, Divider, Box } from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";

const DeliveryOption = () => {
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
          <Checkbox color="background" size="lg">
            Self collect
          </Checkbox>
          <Spacer />
          <chakra.h3 fontSize="md" color="background">
            $0
          </chakra.h3>
        </Flex>
        <Flex direction="row">
          <Checkbox color="background" size="lg">
            Delivery
          </Checkbox>
          <Spacer />
          <chakra.h3 fontSize="md" color="background">
            $10
          </chakra.h3>
        </Flex>
      </Flex>
      <Divider />
    </Box>
  );
};
export default DeliveryOption;
