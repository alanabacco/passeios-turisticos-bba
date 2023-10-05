import Link from "next/link";
import { withSessionHOC } from "src/services/auth/session";
import Head from "src/infra/Head";
import BotaoVoltar from "src/components/BotaoVoltar";
import Footer from "src/components/Footer";
import paginaInicialStyle from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";

function Cadastrar(): JSX.Element {
  const links = [
    { href: "cadastrar/evento-cidade", label: "Cadastrar evento na cidade" },
    { href: "cadastrar/atracao-turistica", label: "Cadastrar atração turística" },
    { href: "cadastrar/guia-turistico", label: "Cadastrar guia turítico" },
    { href: "cadastrar/restaurante", label: "Cadastrar restaurante" },
    { href: "cadastrar/hospedagem", label: "Cadastrar hospedagem" },
    { href: "cadastrar/informacao-util", label: "Cadastrar informação útil" },
  ];

  return (
    <>
      <Head title="Cadastrar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/painel-administrativo" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Cadastrar</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para cadastrar algo novo.
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

export default withSessionHOC(Cadastrar);
