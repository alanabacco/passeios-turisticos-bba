import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { HttpClient } from "src/infra/HttpClient";
import { tokenService } from "src/services/auth/tokenService";
import { withSessionHOC } from "src/services/auth/session";
import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "./formStyles.module.css";

function Hospedagem() {
  const router = useRouter();
  const token = tokenService.get();

  const params = router.query;
  const API = `${process.env.NEXT_PUBLIC_API_URL}/hospedagem/${params.id}`;

  const [values, setValues] = useState({
    nome: "",
    descricao: "",
    endereco: "",
    telefone: "",
  });

  useEffect(() => {
    try {
      HttpClient(API, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setValues((valorAtual) => {
          return {
            ...valorAtual,
            nome: res.body.nome,
            telefone: res.body.telefone,
            descricao: res.body.descricao,
            endereco: res.body.endereco,
          };
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const dados = {
      nome: e.target.nome.value.trim(),
      descricao: e.target.descricao.value.trim(),
      endereco: e.target.endereco.value.trim(),
      telefone: e.target.telefone.value,
    };
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/hospedagens/${params.id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dados),
    };

    try {
      await fetch(endpoint, options)
        .then(async (res) => {
          if (res.ok) {
            const resposta = await res.json();
            return resposta;
          }
        })
        .then(() => {
          router.push("/editar/hospedagens");
        });
    } catch (error) {
      console.log(error);
      alert("Não foi possível editar os dados, tente novamente mais tarde.");
      throw new Error("Não foi possível editar os dados.");
    }
  };

  function handleTelefone(e: any) {
    const input = e.target;
    input.value = mascaraTelefone(input.value);
  }

  function mascaraTelefone(value: any) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  }

  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <section className={comumStyles.mainContainer}>
        <div className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Editar Hospedagens</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para editar as informações.
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <p className={styles.info}>Campos com * são obrigatórios.</p>
          <div className={styles.inputContainer}>
            <label htmlFor="nome" className={styles.label}>
              Nome*
            </label>
            <input
              value={values.nome}
              type="text"
              required
              id="nome"
              name="nome"
              placeholder="Digite o nome do lugar"
              minLength={3}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="descricao" className={styles.label}>
              Descrição
            </label>
            <textarea
              value={values.descricao}
              id="descricao"
              name="descricao"
              placeholder="Digite a descrição"
              maxLength={240}
              onChange={handleChange}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="telefone" className={styles.label}>
              Telefone
            </label>
            <input
              value={values.telefone}
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(16) 00000-0000"
              minLength={14}
              maxLength={15}
              onKeyUp={handleTelefone}
              onChange={handleChange}
              className={`${styles.input} ${styles.inputNumber}`}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="endereco" className={styles.label}>
              Endereço
            </label>
            <input
              value={values.endereco}
              onChange={handleChange}
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Digite o endereço"
              maxLength={200}
              className={styles.input}
            />
          </div>

          <div className={styles.botoes}>
            <button
              type="button"
              onClick={() => router.back()}
              className={styles.botaoCancelar}
            >
              Cancelar
            </button>
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

export default withSessionHOC(Hospedagem);
