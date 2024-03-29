import { Html, Head, Main, NextScript } from "next/document";
import Analytics from "src/components/Analytics";
import VLibrasWidget from "src/components/VLibrasWidget";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <VLibrasWidget />
        <Analytics />
      </body>
    </Html>
  );
}
