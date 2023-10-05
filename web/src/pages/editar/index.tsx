import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/components/Footer";
import { withSessionHOC } from "src/services/auth/session";
import paginaInicialStyle from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";
import BotaoVoltar from "src/components/BotaoVoltar";

function Editar(): JSX.Element {
  const links = [
    { href: "editar/eventos-cidade", label: "Editar um evento na cidade" },
    { href: "editar/atracoes-turisticas", label: "Editar uma atração turística" },
    { href: "editar/guias-turisticos", label: "Editar um guia turítico" },
    { href: "editar/restaurantes", label: "Editar um restaurante" },
    { href: "editar/hospedagens", label: "Editar uma hospedagem" },
    { href: "editar/informacoes-uteis", label: "Editar uma informação útil" },
  ];

  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/painel-administrativo" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Editar</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para poder editar.
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

export default withSessionHOC(Editar);
