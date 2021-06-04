import { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { ItemCarouselImage } from "./ItemCarouselImage";

export const ItemCarousel = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    centered: true,
    duration: 3000,
    loop: true,
    mode: "free-snap",
    spacing: 50,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    // breakpoints: {
    //   "(min-width: 480px)": {
    //     slidesPerView: 3,
    //     mode: "free-snap",
    //   },
    //   "(min-width: 768px)": {
    //     slidesPerView: 3,
    //     mode: "free-snap",
    //   },
    //   "(min-width: 1300px)": {
    //     slidesPerView: 4,
    //     mode: "free-snap",
    //   },
    // },
    slidesPerView: 1,
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <Box
      className="keen-slider"
      width={["100vw", "60vw"]}
      ref={sliderRef}
      //marginTop="5"
      //objectFit="fit"
    >
      {[...Array(6)].map((_, i) => {
        return (
          <div key={i} className="keen-slider__slide">
            <ItemCarouselImage src={`/mosses/moss${i}.png`} />
          </div>
        );
      })}
    </Box>
  );
};
