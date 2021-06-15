import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import "@fontsource/merriweather/400.css";
import "@fontsource/lora/400.css";
import { CartProvider } from "../context/CartContext";
import { PaymentProvider } from "../context/PaymentContext";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <PaymentProvider>
      <CartProvider>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeProvider
            options={{
              useSystemColorMode: true,
            }}
          >
            <Head>
              <title>TheAroidHouse</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
          </ColorModeProvider>
        </ChakraProvider>
      </CartProvider>
    </PaymentProvider>
  );
}

export default MyApp;
