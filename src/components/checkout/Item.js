import { Flex, Spacer, chakra, Divider } from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";

const Item = () => {
  return (
    <Flex direction="column" width={["80vw", "55vw"]} paddingBottom="2">
      <Flex direction="row" paddingLeft="5" align="center">
        <chakra.h3 fontSize="md" color="background" paddingTop="2">
          Original moss pole
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background">
          $20
        </chakra.h3>
      </Flex>

      <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
        <chakra.h3 fontSize="md" color="background">
          Quantity
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background">
          1
        </chakra.h3>
      </Flex>
      <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
        <chakra.h3 fontSize="md" color="background">
          Size
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background" paddingBottom="2">
          M
        </chakra.h3>
      </Flex>
      <Divider />
    </Flex>
  );
};
export default Item;
