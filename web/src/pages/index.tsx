import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "./components/Footer";
import styles from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";

export default function PaginaInicial(): JSX.Element {
  return (
    <>
      <Head title="Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>
            Trilhas e Passeios Turísticos de Borborema
          </h1>
          <p className={comumStyles.introDescricao}>
            Boas vindas ao Trilha e Passeios Turísticos de Borborema. Aqui você vai encontrar diversas informações para te ajudar a explorar os melhores pontos turísticos e experiências incríveis que Borborema tem a oferecer.
          </p>

          <p className={comumStyles.introDescricao}>
            Borborema, também conhecida como <Link href="https://www.borborema.sp.gov.br/o-municipio/historia-do-municipio" target="_blank">Pérola Paulista</Link> e <Link href="https://www.borborema.sp.gov.br/turismo/territorio-dos-enxovais" target="_blank">Território dos enxovais</Link>, faz parte do projeto <Link href="http://caminhosdotiete.com.br/cidades/borborema" target="_blank">Caminhos do Tietê</Link>, e é reconhecida como <Link href="https://www.borborema.sp.gov.br/o-municipio/dados-do-municipio" target="_blank">destino turístico pelo Ministério do Turismo</Link>. Faz parte também da <Link href="https://www.ibitinga.sp.gov.br/noticias/turismo/rota-encantos-do-interior-foi-lancado-no-ultimo-domingo-05-durante-festa-de-nossa-senhora-dos-navegantes" target="_blank">Rota Encantos do Interior</Link> devido ao seu potencial turístico na região.
          </p>
        </section>

        <section>
          <nav className={styles.linksBox}>
            <Link className={styles.link} href="catalogo/eventos-cidade">
              Eventos na cidade
            </Link>
            <Link className={styles.link} href="catalogo/atracoes-turisticas">
              Atrações turísticas
            </Link>
            <Link className={styles.link} href="catalogo/guias-turisticos">
              Guias turíticos
            </Link>
            <Link className={styles.link} href="catalogo/restaurantes">
              Restaurantes
            </Link>
            <Link className={styles.link} href="catalogo/hospedagens">
              Hospedagem
            </Link>
            <Link
              className={styles.link}
              href="https://www.borborema.sp.gov.br/o-municipio/historia-do-municipio"
              target="_blank"
            >
              História do município
            </Link>
            <Link
              className={styles.link}
              href="https://www.borborema.sp.gov.br/o-municipio/dados-do-municipio"
              target="_blank"
            >
              Dados do município
            </Link>
            <Link className={styles.link} href="catalogo/informacoes-uteis">
              Outras informações
            </Link>
          </nav>
        </section>
      </main>
      <Footer/>
    </>
  );
}
