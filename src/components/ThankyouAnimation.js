import React, { useRef } from "react";
import("@lottiefiles/lottie-player");

export default function ThankyouAnimation() {
  const ref = useRef(null);

  return (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      loop
      mode="normal"
      src="https://assets6.lottiefiles.com/packages/lf20_uyfxzh9u.json"
      style={{ width: "350px", height: "350px" }}
    ></lottie-player>
  );
}
