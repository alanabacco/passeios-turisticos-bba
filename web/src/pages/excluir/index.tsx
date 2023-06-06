import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/pages/components/Footer";
import paginaInicialStyle from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSessionHOC } from "src/services/auth/session";
import BotaoVoltar from "../components/BotaoVoltar";

function Excluir(): JSX.Element {
  return (
    <>
      <Head title="Excluir | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Excluir</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para poder excluir.
          </p>
        </section>

        <section>
          <nav className={paginaInicialStyle.linksBox}>
            <Link className={paginaInicialStyle.link} href="excluir/evento-cidade">
              Excluir um Evento na Cidade
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/atracao-turistica">
              Excluir uma Atração Turística
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/guia-turistico">
              Excluir um Guia Turítico
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/restaurante">
              Excluir um Restaurante
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/hospedagem">
              Excluir uma Hospedagem
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/informacao-util">
              Excluir uma Informação Útil
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(Excluir);
