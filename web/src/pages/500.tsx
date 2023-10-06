import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/components/Footer";
import style from "../styles/paginas-de-erro.module.css";
import comumStyles from "../styles/comum.module.css";

export default function Pagina500(): JSX.Element {
  return (
    <>
      <Head title="500 | Passeios Turísticos de Borborema" />

      <div className={comumStyles.mainContainer}>
        <div className={style.container}>
          <h1>500 - Erro interno do servidor</h1>
          <Link href="/">Voltar à Página Inicial</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
