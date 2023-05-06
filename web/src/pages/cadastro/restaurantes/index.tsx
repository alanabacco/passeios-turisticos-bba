"use client";

import Link from "next/link";
import comumStyles from "../../../styles/comum.module.css";
import styles from "./styles.module.css";

export default function CadastroRestaurante() {
  return (
    <>
      <section className={comumStyles.mainContainer}>
        <div className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Cadastrar Restaurantes</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para cadastrar restaurantes, lanchonetes, pizzarias,
            entre outras coisas onde os turistas possam se alimentar.
          </p>
        </div>
        <form action="" className={styles.formContainer}>
          <p className={styles.info}>Campos com * são obrigatórios.</p>
          <div className={styles.inputContainer}>
            <label htmlFor="nome" className={styles.label}>
              Nome:*{" "}
            </label>
            <input
              type="text"
              required
              id="nome"
              name="nome"
              placeholder="Digite o nome do lugar"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="descricao" className={styles.label}>
              Descrição:{" "}
            </label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Digite a descrição"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="telefone" className={styles.label}>
              Telefone:{" "}
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="(16) 00000-0000"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="endereco" className={styles.label}>
              Endereço:{" "}
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Digite o endereço"
              className={styles.input}
            />
          </div>

          <div className={styles.botoes}>
            <Link href="/">
              <button className={styles.botaoCancelar}>Cancelar</button>
            </Link>
            <input type="submit" value="Cadastrar" className={styles.botaoCadastrar} />
          </div>
        </form>
      </section>
    </>
  );
}
