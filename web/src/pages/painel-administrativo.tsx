/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "./components/Footer";
import comumStyles from "src/styles/comum.module.css";
import painelAdministrativoStyle from "src/styles/painel-administrativo.module.css";
import { withSessionHOC } from "src/services/auth/session";
import BotaoVoltar from "./components/BotaoVoltar";

function PainelAdministrativo() {
  return (
    <>
      <Head title="Painel Administrativo | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Painel administrativo</h1>
          <div className={painelAdministrativoStyle.descricaoContainer}>
            <p className={painelAdministrativoStyle.introDescricao}>
              Escolha o botão "Cadastrar" para cadastrar um item novo. Escolha o botão
              "Editar" para editar um item. Escolha o botão "Excluir" para excluir um
              item.
            </p>
            <Link href="/logout" className={painelAdministrativoStyle.logout}>
              Sair
            </Link>
          </div>
        </section>

        <section>
          <nav className={painelAdministrativoStyle.linksBox}>
            <Link className={painelAdministrativoStyle.link} href="/cadastrar">
              Cadastrar
            </Link>
            <Link className={painelAdministrativoStyle.link} href="/editar">
              Editar
            </Link>
            <Link className={painelAdministrativoStyle.link} href="/excluir">
              Excluir
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(PainelAdministrativo);
