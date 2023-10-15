import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "src/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";

export default function PaginaInicial(): JSX.Element {
  const links = [
    { href: "catalogo/eventos-cidade", label: "Eventos na cidade" },
    { href: "catalogo/atracoes-turisticas", label: "Atrações turísticas" },
    { href: "catalogo/guias-turisticos", label: "Guias turísticos" },
    { href: "catalogo/restaurantes", label: "Restaurantes" },
    { href: "catalogo/hospedagens", label: "Hospedagens" },
    { href: "catalogo/informacoes-uteis", label: "Outras informações" },
    {
      href: "https://www.borborema.sp.gov.br/o-municipio/historia-do-municipio",
      label: "História do município",
      target: "_blank",
    },
    {
      href: "https://www.borborema.sp.gov.br/o-municipio/dados-do-municipio",
      label: "Dados do município",
      target: "_blank",
    },
  ];

  return (
    <>
      <Head title="Passeios Turísticos de Borborema | Página Inicial" />
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>
            Trilhas e Passeios Turísticos de Borborema
          </h1>
          <p className={comumStyles.introDescricao}>
            Boas vindas ao Trilha e Passeios Turísticos de Borborema. Aqui você vai encontrar diversas informações para te ajudar a explorar os melhores pontos turísticos e experiências incríveis que Borborema tem a oferecer.
          </p>

          <p className={comumStyles.introDescricao}>
            Borborema, também conhecida como <Link href="https://www.borborema.sp.gov.br/o-municipio/historia-do-municipio" target="_blank" rel="noopener noreferrer">Pérola Paulista</Link> e <Link href="https://www.borborema.sp.gov.br/turismo/territorio-dos-enxovais" target="_blank" rel="noopener noreferrer">Território dos enxovais</Link>, faz parte do projeto <Link href="http://caminhosdotiete.com.br/cidades/borborema" target="_blank" rel="noopener noreferrer">Caminhos do Tietê</Link>, e é reconhecida como <Link href="https://www.borborema.sp.gov.br/o-municipio/dados-do-municipio" target="_blank" rel="noopener noreferrer">destino turístico pelo Ministério do Turismo</Link>. Faz parte também da <Link href="https://www.ibitinga.sp.gov.br/noticias/turismo/rota-encantos-do-interior-foi-lancado-no-ultimo-domingo-05-durante-festa-de-nossa-senhora-dos-navegantes" target="_blank" rel="noopener noreferrer">Rota Encantos do Interior</Link> devido ao seu potencial turístico na região.
          </p>
        </section>

        <nav>
          <ul className={styles.linksBox}>
            {links.map((link) => (
              <li key={link.href} className={styles.linkLi}>
                <Link
                  href={link.href}
                  {...(link.target && {
                    target: link.target,
                    rel: "noopener noreferrer",
                  })}
                >
                  {link.label}
                  {link.target && (
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className={styles.icon}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
