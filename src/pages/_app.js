import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "@fontsource/merriweather/400.css";
import "@fontsource/lora/400.css";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
