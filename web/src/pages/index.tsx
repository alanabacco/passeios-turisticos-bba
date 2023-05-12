"use client";

import Link from "next/link";
import Head from "src/infra/Head";
import Footer from "./components/Footer";
import styles from "src/styles/pagina-inicial.module.css";
import comumStyles from "src/styles/comum.module.css";

export default function PaginaInicial() {
  return (
    <>
      <Head title="Página Inicial | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>
            Trilhas e Passeios <br /> Turísticos de Borborema
          </h1>
          <p className={comumStyles.introDescricao}>
            Boas vindas ao Trilha e Passeios Turísticos de Borborema, o lugar perfeito
            para descobrir tudo sobre turismo na cidade. Oferecemos diversas informações
            úteis para te ajudar a explorar os melhores pontos turísticos e experiências
            incríveis que Borborema tem a oferecer. Comece a explorar agora!
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
            <Link className={styles.link} href="catalogo/hospedasgens">
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
              Outras informações úteis
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
