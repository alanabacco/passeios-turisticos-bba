import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import "src/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => setLoading(true));
    Router.events.on("routeChangeComplete", (url) => setLoading(false));
    Router.events.on("routeChangeError", (url) => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-192x192.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Borborema, Turismo, Rio Tietê, Interior São Paulo, Informações Turísticas, Eventos, Borborema SP, Praia, Pescaria, Pesca, Camping, O que fazer em Borborema, Onde comer em Borborema"
        />
        <meta
          name="description"
          content="Passeios turísticos em Borborema é um sistema web que centraliza várias informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações."
        />
        <meta name="theme-color" content="#b00000" />
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

      {loading ? (
        <div className="spinner-wraper">
          <div className="spinner" />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

// Referência do Loading: https://www.youtube.com/watch?v=Dgnr3akrMHg
