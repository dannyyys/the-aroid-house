import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "@fontsource/merriweather/400.css";
import "@fontsource/lora/400.css";
import { CartProvider } from "../context/CartContext";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </CartProvider>
  );
}

export default MyApp;
