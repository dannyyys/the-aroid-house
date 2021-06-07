import { Box } from "@chakra-ui/layout";
import { ImCross } from "react-icons/im";

const DeleteButton = (props) => {
  return (
    <Box color="background" as="button" onClick={props.onClick}>
      {<ImCross />}
    </Box>
  );
};
export default DeleteButton;
