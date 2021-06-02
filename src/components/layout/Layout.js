import { Stack } from "@chakra-ui/react";
import { BigButton } from "../buttons/BigButton";

export const Layout = ({ children }) => {
  return (
    <Stack width="full" height="full" backgroundColor="background">
      {children}
    </Stack>
  );
};
