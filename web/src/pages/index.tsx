import Link from "next/link";
import Head from "../utils/Head";
import Footer from "./components/Footer";
import styles from "../styles/pagina-inicial.module.css";

export default function PaginaInicial() {
  return (
    <>
      <Head title="Página Inicial | Passeios Turísticos de Borborema" />
      <main className={styles.mainContainer}>
        <section className={styles.introSection}>
          <h1 className={styles.tituloPagina}>
            Trilhas e Passeios <br /> Turísticos de Borborema
          </h1>
          <p>
            Boas vindas ao Trilha e Passeios Turísticos de Borborema, o lugar perfeito
            para descobrir tudo sobre turismo na cidade. Oferecemos diversas informações
            úteis para te ajudar a explorar os melhores pontos turísticos e experiências
            incríveis que Borborema tem a oferecer. Comece a explorar agora!
          </p>
        </section>

        <section>
          <nav className={styles.linksBox}>
            <Link className={styles.link} href="/eventos-cidade">
              Eventos na cidade
            </Link>
            <Link className={styles.link} href="/atracoes-turisticas">
              Atrações turísticas
            </Link>
            <Link className={styles.link} href="/guias-turisticos">
              Guias turíticos
            </Link>
            <Link className={styles.link} href="/restaurantes">
              Restaurantes
            </Link>
            <Link className={styles.link} href="/hospedasgens">
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
            <Link className={styles.link} href="/informacoes-uteis">
              Outras informações úteis
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
