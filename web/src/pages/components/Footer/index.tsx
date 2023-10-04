import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.appFooter}>
      <div>
        <Link href="/" className={styles.footerTitle}>
          Trilhas e Passeios <br /> Turísticos de Borborema
        </Link>
        <p>Versão 2.0</p>
      </div>

      <div className={styles.BoxLink}>
        <Link href="/painel-administrativo" className={styles.footerLink}>
          Painel Administrativo
        </Link>

        <Link
          href="https://www.borborema.sp.gov.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Site oficial do município de Borborema
        </Link>

        <Link
          href="https://www.borborema.sp.gov.br/turismo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Página oficial do Turismo
        </Link>
      </div>
    </footer>
  );
}
