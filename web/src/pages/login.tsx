"use-client";

import Head from "src/infra/Head";
import Footer from "./components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "src/styles/login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { authService } from "src/services/auth/authService";

// TODO: ao teclar enter, clicar no botao entrar.

export default function Login() {
  const router = useRouter();

  const [values, setValues] = useState({
    nomeUsuario: "",
    senha: "",
  });

  function handleChange(e: any) {
    const valorCampo = e.target.value;
    const nomeCampo = e.target.name;
    setValues((valorAtual) => {
      return {
        ...valorAtual,
        [nomeCampo]: valorCampo,
      };
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    authService
      .login({
        nome: values.nomeUsuario,
        senha: values.senha,
      })
      .then(() => {
        router.push("/painel-administrativo");
      })
      .catch((err) => {
        console.log(err);
        alert("Usuário ou senha inválidos.");

        // TODO: colocar um toast ou um aviso mais bonito
      });
  }

  return (
    <>
      <Head title="Login | Passeios Turísticos de Borborema" />
      <div className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Entrar com usuário e senha</h1>
        </section>

        <p className={styles.info}>
          Obs.: Esse site utiliza cookies para guardar suas informações de login.
        </p>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="nomeUsuario" className={styles.label}>
              Nome de usuário
            </label>
            <input
              type="text"
              required
              id="nomeUsuario"
              name="nomeUsuario"
              placeholder="Usuário"
              minLength={3}
              value={values.nomeUsuario}
              onChange={handleChange}
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
              value={values.senha}
              onChange={handleChange}
              className={`${styles.input} ${styles.inputSenha}`}
            />
          </div>

          <div className={styles.botoes}>
            <Link href="/painel-administrativo">
              <button className={styles.botaoCancelar}>Cancelar</button>
            </Link>
            <button className={styles.botaoEntrar}>Entrar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
