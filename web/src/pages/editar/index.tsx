import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/pages/components/Footer";
import { withSessionHOC } from "src/services/auth/session";
import paginaInicialStyle from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";
import BotaoVoltar from "../components/BotaoVoltar";

function Editar() {
  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Editar</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para poder editar.
          </p>
        </section>

        <section>
          <nav className={paginaInicialStyle.linksBox}>
            <Link className={paginaInicialStyle.link} href="editar/eventos-cidade">
              Editar um Evento na Cidade
            </Link>
            <Link className={paginaInicialStyle.link} href="editar/atracoes-turisticas">
              Editar uma Atração Turística
            </Link>
            <Link className={paginaInicialStyle.link} href="editar/guias-turisticos">
              Editar um Guia Turítico
            </Link>
            <Link className={paginaInicialStyle.link} href="editar/restaurantes">
              Editar um Restaurante
            </Link>
            <Link className={paginaInicialStyle.link} href="editar/hospedasgens">
              Editar uma Hospedagem
            </Link>
            <Link className={paginaInicialStyle.link} href="editar/informacoes-uteis">
              Editar uma Informação Útil
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(Editar);
