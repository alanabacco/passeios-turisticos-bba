import type { AppProps } from "next/app";
import Head from "next/head";
import "src/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Passeios turísticos em Borborema é um sistema web que centraliza várias informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="keywords"
          content="Borborema SP, turismo, guias turisticos, interior de São Paulo, informações turísticas, eventos, passeios turisticos borborema"
        ></meta>

        <meta property="og:title" content="Passeios Turísticos de Borborema" />
        <meta
          property="og:description"
          content="Descubra eventos, passeios turísticos, restaurantes, guias e hospedagens, além de uma variedade de informações essenciais para aproveitar ao máximo sua experiência na cidade."
        />
        <meta property="og:image" content="/pag-inicial-img.png" />
        <meta property="og:url" content="https://passeiosturisticosbba.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
