import React, { useRef } from "react";

export default function Landing() {
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
      src="https://assets6.lottiefiles.com/private_files/lf30_nivslwok.json"
      style={{ width: "350px", height: "350px" }}
    ></lottie-player>
  );
}
