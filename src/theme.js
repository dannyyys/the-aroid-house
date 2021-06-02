import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Merriweather",
  body: "Lora",
};

const theme = extendTheme({
  fonts,
  colors: {
    background: "#F8FAF8",
    primary: "#FFBA00",
    secondary: "#BBCBC2",
    secondaryBackground: "#0C3B2E",
  },
});

export default theme;
