import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/components/Footer";
import style from "../styles/paginas-de-erro.module.css";
import comumStyles from "../styles/comum.module.css";

export default function Pagina404() {
  return (
    <>
      <Head title="404 | Passeios Turísticos de Borborema" />

      <div className={comumStyles.mainContainer}>
        <div className={style.container}>
          <h1>404 - A página que você procura não foi encontrada</h1>
          <Link href="/">Voltar à Página Inicial</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
