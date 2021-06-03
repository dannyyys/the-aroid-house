import React, { useRef } from "react";

export default function ThankyouAnimation() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
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
