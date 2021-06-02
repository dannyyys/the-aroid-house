import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Merriweather",
  body: "Lora",
};

const theme = extendTheme({
  fonts,
  colors: {
    background: "#F8FAF8",
    buttonBackground: "#FFBA00",
    buttonBackgroundHover: "#CC9400",
    secondaryBackground: "#BBCBC2",
    text: "#0C3B2E",
  },
});

export default theme;
