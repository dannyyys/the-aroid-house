import { Flex, Spacer, chakra } from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";

const CartItem = () => {
  return (
    <Flex direction="row" align="center">
      <Flex direction="column" width="80vw" paddingBottom="2">
        <Flex direction="row" paddingLeft="5" align="center">
          <chakra.h3 fontSize="md" color="white" paddingTop="2">
            Original moss pole
          </chakra.h3>
          <Spacer />
          <chakra.h3 fontSize="md" color="white">
            $20
          </chakra.h3>
        </Flex>

        <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
          <chakra.h3 fontSize="md" color="white">
            Quantity
          </chakra.h3>
          <Spacer />
          <chakra.h3 fontSize="md" color="white">
            1
          </chakra.h3>
        </Flex>
        <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
          <chakra.h3 fontSize="md" color="white">
            Size
          </chakra.h3>
          <Spacer />
          <chakra.h3 fontSize="md" color="white">
            M
          </chakra.h3>
        </Flex>
      </Flex>
      <Spacer />
      <DeleteButton />
    </Flex>
  );
};
export default CartItem;
