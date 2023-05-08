import Link from "next/link";
import Head from "../utils/Head";
import Footer from "./components/Footer";
import paginaInicialStyle from "../styles/pagina-inicial.module.css";
import comumStyles from "../styles/comum.module.css";
import painelAdministrativoStyle from "../styles/painel-administrativo.module.css";

export default function PainelAdministrativo() {
  return (
    <>
      <Head title="Painel Administrativo | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Painel administrativo</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para cadastrar algo novo. Você precisa estar logado com
            usuário e senha para conseguir cadastrar.
          </p>
        </section>

        <Link href="/login" className={painelAdministrativoStyle.loginLogout}>
          Entrar com usuário e senha
        </Link>

        <Link href="/logout" className={painelAdministrativoStyle.loginLogout}>
          Sair
        </Link>

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
