import React, { useRef } from "react";
import("@lottiefiles/lottie-player");

export default function Landing() {
  const ref = useRef(null);

  return (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      loop
      mode="normal"
      src="https://assets10.lottiefiles.com/packages/lf20_o6hQ8m.json"
      style={{ width: "350px", height: "350px" }}
    ></lottie-player>
  );
}
