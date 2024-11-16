import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.appFooter}>
      <div>
        <Link href="/" className={styles.footerTitle}>
          Trilhas e Passeios <br /> Turísticos de Borborema
        </Link>
        <Link 
          href="https://github.com/alanabacco/passeios-turisticos-bba"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.versionText}
        >
          Versão 4.0
        </Link>
      </div>

      <div className={styles.BoxLink}>
        <Link href="/painel-administrativo" className={styles.footerLink}>
          Painel Administrativo
        </Link>        

        <Link
          href="https://www.borborema.sp.gov.br/turismo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Página oficial do Turismo
        </Link>

        <Link
          href="https://passeios-turisticos-bba-server.vercel.app/api-docs"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Documentação da API
        </Link>

        <Link
          href="https://colab.research.google.com/drive/1fMLT1eYB0qLZzXV0SDghYca6kMyHNNu1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Análise de dados
        </Link>
      </div>
    </footer>
  );
}
