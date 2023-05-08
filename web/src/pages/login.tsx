import Head from "../utils/Head";
import Footer from "./components/Footer";
import comumStyles from "../styles/comum.module.css";
import styles from "../styles/login.module.css";
import Link from "next/link";

export default function PainelAdministrativo() {
  return (
    <>
      <Head title="Login | Passeios Turísticos de Borborema" />
      <div className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Entrar com usuário e senha</h1>
        </section>

        <form className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="usuario" className={styles.label}>
              Nome de usuário
            </label>
            <input
              type="text"
              required
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              minLength={3}
              className={styles.input}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="senha" className={styles.label}>
              Senha
            </label>
            <input
              type="password"
              required
              id="senha"
              name="senha"
              placeholder="••••••••••"
              minLength={6}
              className={`${styles.input} ${styles.inputSenha}`}
            />
          </div>

          <div className={styles.botoes}>
            <Link href="/painel-administrativo">
              <button className={styles.botaoCancelar}>Cancelar</button>
            </Link>
            <Link href="/painel-administrativo">
              <button className={styles.botaoEntrar}>Entrar</button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
