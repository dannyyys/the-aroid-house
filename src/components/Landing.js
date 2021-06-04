import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import("@lottiefiles/lottie-player");

export default function Landing(props) {
  const ref = useRef(null);

  return (
    <Box marginTop={props.marginTop}>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets10.lottiefiles.com/packages/lf20_o6hQ8m.json"
        style={{ width: "350px", height: "350px" }}
      ></lottie-player>
    </Box>
  );
}
