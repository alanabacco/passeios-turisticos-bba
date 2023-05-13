import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/pages/components/Footer";
import paginaInicialStyle from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSessionHOC } from "src/services/auth/session";

function Excluir() {
  return (
    <>
      <Head title="Excluir | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Editar</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para poder editar.
          </p>
        </section>

        <section>
          <nav className={paginaInicialStyle.linksBox}>
            <Link className={paginaInicialStyle.link} href="excluir/evento-cidade">
              Excluir Evento na Cidade
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/atracao-turistica">
              Excluir Atração Turística
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/guia-turistico">
              Excluir Guia Turítico
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/restaurante">
              Excluir Restaurante
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/hospedasgem">
              Excluir Hospedagem
            </Link>
            <Link className={paginaInicialStyle.link} href="excluir/informacao-util">
              Excluir Informação Útil
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(Excluir);
