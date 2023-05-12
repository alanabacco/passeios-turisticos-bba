import Link from "next/link";
import styles from "./styles.module.css";

type Props = {
  loginLink?: boolean;
};

export default function Footer({ loginLink = false }: Props): JSX.Element {
  return (
    <footer className={styles.appFooter}>
      <h2 className={styles.footerTitle}>
        <Link href="/">Trilhas e Passeios Turísticos de Borborema</Link>
      </h2>
      <Link
        href="https://www.borborema.sp.gov.br"
        target="_blank"
        className={styles.footerLink}
      >
        Site oficial do município de Borborema
      </Link>
      <div>
        <Link href="/painel-administrativo" className={styles.footerLink}>
          Painel Administrativo
        </Link>
        {loginLink && (
          <>
            <span> -</span>{" "}
            <Link href="/login" className={styles.footerLink}>
              Login
            </Link>
          </>
        )}
      </div>
    </footer>
  );
}
