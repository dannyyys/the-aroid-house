import { Image } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const ItemCarouselImage = ({ src }) => (
  <Zoom overlayBgColorEnd="rgba(233, 227, 217, 0.5)">
    <Image
      borderRadius="2xl"
      src={src}
      objectFit="contain"
      height={["full"]}
      width={["full"]}
      //boxSize="xl"
    />
  </Zoom>
);
