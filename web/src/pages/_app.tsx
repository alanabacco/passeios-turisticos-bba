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
          content="borborema sp, prainha de borborema, interior de são paulo, eventos em borborema, prainha, pesca em borborema, camping em borborema, o que fazer em borborema, onde comer em borborema, borborema, praia do juqueta, hospedagens em borborema, passeios em borborema"
        />
        <meta
          name="description"
          content="Descubra eventos em Borborema e explore o turismo no interior de São Paulo. Nosso sistema centraliza informações sobre restaurantes, hospedagens, guias turísticos e muito mais."
        />
        <meta name="google-site-verification" content="jpM0kRP0rFoxQUvgmbJOwsfhxzWMDPPlqjI3wn0fRgk" />
        <meta name="theme-color" content="#b00000" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Passeios Turísticos de Borborema" />
        <meta
          property="og:description"
          content="Descubra eventos em Borborema e explore o turismo no interior de São Paulo. Nosso sistema centraliza informações sobre restaurantes, hospedagens, guias turísticos e muito mais."
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
          content="Descubra eventos em Borborema e explore o turismo no interior de São Paulo. Nosso sistema centraliza informações sobre restaurantes, hospedagens, guias turísticos e muito mais."
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
