import { Flex, Spacer, chakra, Divider } from "@chakra-ui/react";
import DeleteButton from "../buttons/DeleteButton";

const Item = (props) => {
  return (
    <Flex direction="column" width={["80vw", "55vw"]} paddingBottom="2">
      <Flex direction="row" paddingLeft="5" align="center">
        <chakra.h3 fontSize="md" color="background" paddingTop="2">
          {props.item.name}
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background">
          $ {props.item.price}
        </chakra.h3>
      </Flex>

      <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
        <chakra.h3 fontSize="md" color="background">
          Quantity
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background">
          {props.item.quantity}
        </chakra.h3>
      </Flex>
      <Flex direction="row" paddingLeft="10" width="40vw" paddingTop="2">
        <chakra.h3 fontSize="md" color="background">
          Size
        </chakra.h3>
        <Spacer />
        <chakra.h3 fontSize="md" color="background" paddingBottom="2">
          {props.item.size}
        </chakra.h3>
      </Flex>
      <Divider />
    </Flex>
  );
};
export default Item;
