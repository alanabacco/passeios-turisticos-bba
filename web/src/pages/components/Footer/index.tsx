import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.appFooter}>
      <div>
        <h2 className={styles.footerTitle}>
          <Link href="/">
            Trilhas e Passeios <br /> Turísticos de Borborema
          </Link>
        </h2>
        <p>Versão 2.0</p>
      </div>

      <div className={styles.BoxLink}>
        <div>
          <Link href="/painel-administrativo" className={styles.footerLink}>
            Painel Administrativo
          </Link>
        </div>

        <div>
          <Link
            href="https://www.borborema.sp.gov.br"
            target="_blank"
            className={styles.footerLink}
          >
            Site oficial do município de Borborema
          </Link>
        </div>

        <div>
          <Link
            href="https://www.borborema.sp.gov.br/turismo"
            target="_blank"
            className={styles.footerLink}
          >
            Página oficial do Turismo
          </Link>
        </div>
      </div>
    </footer>
  );
}
