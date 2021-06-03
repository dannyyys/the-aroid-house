import { Box } from "@chakra-ui/layout";
import { ImCross } from "react-icons/im";

const DeleteButton = () => {
  return (
    <Box color="white" onClick="">
      {<ImCross />}
    </Box>
  );
};
export default DeleteButton;