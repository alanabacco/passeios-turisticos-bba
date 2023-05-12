"use-client";

import Head from "src/infra/Head";
import Link from "next/link";
import style404 from "../styles/pagina404.module.css";
import comumStyles from "../styles/comum.module.css";
import Footer from "./components/Footer";

export default function Pagina404() {
  return (
    <>
      <Head title="404 | Passeios Turísticos de Borborema" />
      
      <div className={comumStyles.mainContainer}>
        <div className={style404.container}>
          <h1>404 - A página que você procura não foi encontrada</h1>
          <Link href="/">Voltar à Página Inicial</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
