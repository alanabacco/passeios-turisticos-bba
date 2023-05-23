import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/pages/components/Footer";
import paginaInicialStyle from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSessionHOC } from "src/services/auth/session";
import BotaoVoltar from "../components/BotaoVoltar";

function Cadastrar() {
  return (
    <>
      <Head title="Cadastrar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Cadastrar</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para cadastrar algo novo.
          </p>
        </section>

        <section>
          <nav className={paginaInicialStyle.linksBox}>
            <Link className={paginaInicialStyle.link} href="cadastrar/evento-cidade">
              Cadastrar Evento na Cidade
            </Link>
            <Link className={paginaInicialStyle.link} href="cadastrar/atracao-turistica">
              Cadastrar Atração Turística
            </Link>
            <Link className={paginaInicialStyle.link} href="cadastrar/guia-turistico">
              Cadastrar Guia Turítico
            </Link>
            <Link className={paginaInicialStyle.link} href="cadastrar/restaurante">
              Cadastrar Restaurante
            </Link>
            <Link className={paginaInicialStyle.link} href="cadastrar/hospedasgem">
              Cadastrar Hospedagem
            </Link>
            <Link className={paginaInicialStyle.link} href="cadastrar/informacao-util">
              Cadastrar Informação Útil
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(Cadastrar);
