import type { AppProps } from "next/app";
import Head from "next/head";
import "src/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Borborema, Turismo, Pérola Paulista, Território dos Enxovais, Caminhos do Tietê, Encantos do Interior, Rio Tietê, Interior São Paulo, Informações Turísticas, Eventos"
        ></meta>
        <meta
          name="description"
          content="Passeios turísticos em Borborema é um sistema web que centraliza várias informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações."
        />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Passeios Turísticos de Borborema" />
        <meta
          property="og:description"
          content="Descubra eventos, restaurantes, atrações turísticas, guias e hospedagens, além de uma variedade de informações para aproveitar ao máximo sua experiência na cidade."
        />
        <meta property="og:image" content="/og-img.png" />
        <meta property="og:url" content="https://passeiosturisticosbba.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="passeiosturisticosbba.vercel.app" />
        <meta property="twitter:url" content="https://passeiosturisticosbba.vercel.app" />
        <meta name="twitter:title" content="Passeios Turísticos de Borborema" />
        <meta
          name="twitter:description"
          content="Descubra eventos, restaurantes, atrações turísticas, guias e hospedagens, além de uma variedade de informações para aproveitar ao máximo sua experiência na cidade."
        />
        <meta
          name="twitter:image"
          content="https://passeiosturisticosbba.vercel.app/og-img.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
