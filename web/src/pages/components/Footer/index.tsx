import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.appFooter}>
      <h2 className={styles.footerTitle}>Trilhas e Passeios Turísticos de Borborema</h2>
      <Link
        href="https://www.borborema.sp.gov.br"
        target="_blank"
        className={styles.footerLink}
      >
        Site oficial do município de Borborema
      </Link>
      <Link href="/painel-administrativo" className={styles.footerLink}>
        Painel Administrativo
      </Link>
    </footer>
  );
}
