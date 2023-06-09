import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { HttpClient } from "src/infra/HttpClient";
import { tokenService } from "src/services/auth/tokenService";
import { withSessionHOC } from "src/services/auth/session";
import { mascararTelefone } from "src/utils/mascararTelefone";
import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "../forms-estilos.module.css";

function GuiaTuristico(): JSX.Element {
  const router = useRouter();
  const token = tokenService.get();

  const params = router.query;
  const API = `${process.env.NEXT_PUBLIC_API_URL}/guias-turisticos/${params.id}`;

  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    tiposTurismo: "",
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
            tiposTurismo: res.body.tipos_turismo,
          };
        });
      });
    } catch (error) {
      console.log(error);
      alert("Não foi possível trazer os dados, tente novamente mais tarde.");
      throw new Error("Não foi possível trazer os dados.");
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const valorCampo = e.target.value;
    const nomeCampo = e.target.name;
    setValues((valorAtual) => {
      return {
        ...valorAtual,
        [nomeCampo]: valorCampo,
      };
    });
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados = {
      nome: e.target.nome.value.trim(),
      telefone: e.target.telefone.value,
      tipos_turismo: e.target.tiposTurismo.value.trim(),
    };
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: dados,
    };

    try {
      HttpClient(API, options)
        .then(async (res) => {
          if (res.ok) {
            const resposta = res.body;
            return resposta;
          }
        })
        .then(() => {
          router.push("/editar/guias-turisticos");
        });
    } catch (error) {
      console.log(error);
      alert("Não foi possível editar os dados, tente novamente mais tarde.");
      throw new Error("Não foi possível editar os dados.");
    }
  };

  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <section className={comumStyles.mainContainer}>
        <div className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Editar Guia Turístico</h1>
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
              placeholder="Digite o nome do guia"
              minLength={3}
              onChange={handleChange}
              className={styles.input}
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
              onKeyUp={mascararTelefone}
              onChange={handleChange}
              className={`${styles.input} ${styles.inputNumber}`}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="tiposTurismo" className={styles.label}>
              Tipos de Turismo
            </label>
            <input
              value={values.tiposTurismo}
              onChange={handleChange}
              type="text"
              id="tiposTurismo"
              name="tiposTurismo"
              placeholder="ex: pesca - trilha - ciclismo - camping"
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

export default withSessionHOC(GuiaTuristico);
