"use client";

import Link from "next/link";
import comumStyles from "src/styles/comum.module.css";
import styles from "./styles.module.css";
import Footer from "src/pages/components/Footer";
import Head from "src/infra/Head";

// referência: https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms#part-6-form-submission-with-javascript-enabled
const handleSubmit = async (e: any) => {
  e.preventDefault();

  const dados = {
    nome: e.target.nome.value,
    descricao: e.target.descricao.value,
    endereco: e.target.endereco.value,
    telefone: e.target.telefone.value,
  };

  const endpoint = `${process.env.API_URL}/restaurantes`;
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dados),
  };

  return await fetch(endpoint, options).then(async (res) => {
    if (res.ok) {
      const resposta = await res.json();
      return resposta;
    }
    throw new Error("Não foi possível cadastrar os dados.");
  });

  // redirecionar p painel
};

export default function CadastrarRestaurante() {
  return (
    <>
      <Head title="Cadastrar Restaurante | Passeios Turísticos de Borborema" />
      <section className={comumStyles.mainContainer}>
        <div className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Cadastrar Restaurantes</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para cadastrar restaurantes, lanchonetes, pizzarias,
            entre outras coisas onde os turistas possam se alimentar.
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <p className={styles.info}>Campos com * são obrigatórios.</p>
          <div className={styles.inputContainer}>
            <label htmlFor="nome" className={styles.label}>
              Nome*
            </label>
            <input
              type="text"
              required
              id="nome"
              name="nome"
              placeholder="Digite o nome do lugar"
              minLength={3}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="descricao" className={styles.label}>
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Digite a descrição"
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="telefone" className={styles.label}>
              Telefone
            </label>
            <input
              type="number"
              id="telefone"
              name="telefone"
              placeholder="(16) 00000-0000"
              // pattern=".{10}"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="endereco" className={styles.label}>
              Endereço
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
            <Link href="/painel-administrativo">
              <button className={styles.botaoCancelar}>Cancelar</button>
            </Link>
            <button type="submit" className={styles.botaoCadastrar}>
              Cadastrar
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}