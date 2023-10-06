/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import painelAdministrativoStyle from "src/styles/painel-administrativo.module.css";
import pagInicialStyle from "src/styles/pagina-inicial.module.css";
import { withSessionHOC } from "src/services/auth/session";
import BotaoVoltar from "src/components/BotaoVoltar";

function PainelAdministrativo(): JSX.Element {
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
          <nav>
            <ul className={pagInicialStyle.linksBox}>
              <li className={pagInicialStyle.linkLi}>
                <Link href="/cadastrar">Cadastrar</Link>
              </li>
              <li className={pagInicialStyle.linkLi}>
                <Link href="/editar">Editar</Link>
              </li>
              <li className={pagInicialStyle.linkLi}>
                <Link href="/excluir">Excluir</Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(PainelAdministrativo);
