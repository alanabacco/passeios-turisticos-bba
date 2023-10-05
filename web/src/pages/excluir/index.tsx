import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/components/Footer";
import paginaInicialStyle from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSessionHOC } from "src/services/auth/session";
import BotaoVoltar from "src/components/BotaoVoltar";

function Excluir(): JSX.Element {
  const links = [
    { href: "excluir/evento-cidade", label: "Excluir um evento na cidade" },
    { href: "excluir/atracao-turistica", label: "Excluir uma atração turística" },
    { href: "excluir/guia-turistico", label: "Excluir um guia turítico" },
    { href: "excluir/restaurante", label: "Excluir um restaurante" },
    { href: "excluir/hospedagem", label: "Excluir uma hospedagem" },
    { href: "excluir/informacao-util", label: "Excluir uma informação útil" },
  ];

  return (
    <>
      <Head title="Excluir | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/painel-administrativo" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Excluir</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para poder excluir.
          </p>
        </section>

        <section>
          <nav>
            <ul className={paginaInicialStyle.linksBox}>
              {links.map((link) => (
                <li key={link.href} className={paginaInicialStyle.linkLi}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(Excluir);
