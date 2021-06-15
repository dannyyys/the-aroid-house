import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="TheAroidHouse" />
          <meta name="description" content="Trying to make gardening simple." />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://the-aroid-house-official-site.vercel.app/"
          />
          <meta property="og:title" content="TheAroidHouse" />
          <meta
            property="og:description"
            content="Trying to make gardening simple."
          />
          <meta property="og:image" content="/seo_image.png" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
