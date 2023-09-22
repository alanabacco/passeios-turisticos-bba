import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { HttpClient } from "src/infra/HttpClient";
import { tokenService } from "src/services/auth/tokenService";
import { withSessionHOC } from "src/services/auth/session";
import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "../forms-estilos.module.css";

function Evento(): JSX.Element {
  const router = useRouter();
  const token = tokenService.get();

  const params = router.query;
  const API = `${process.env.NEXT_PUBLIC_API_URL}/eventos/${params.id}`;

  const [values, setValues] = useState({
    nome: "",
    descricao: "",
    endereco: "",
    dataInicio: "",
    dataFim: "",
  });

  const [dataMin, setDataMin] = useState("");

  useEffect(() => {
    try {
      HttpClient(API, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setDataMin(res.body.data_inicio);
        setValues((valorAtual) => {
          return {
            ...valorAtual,
            nome: res.body.nome,
            descricao: res.body.descricao,
            endereco: res.body.endereco,
            dataInicio: res.body.data_inicio,
            dataFim: res.body.data_fim,
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

    if (nomeCampo == "dataInicio") setDataMin(valorCampo);
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados = {
      nome: e.target.nome.value.trim(),
      descricao: e.target.descricao.value.trim(),
      endereco: e.target.endereco.value.trim(),
      data_inicio: e.target.dataInicio.value,
      data_fim: e.target.dataFim.value,
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
          router.push("/editar/eventos-cidade");
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
          <h1 className={comumStyles.introTitulo}>Editar Evento</h1>
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
              placeholder="Digite o nome do evento"
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
              maxLength={250}
              onChange={handleChange}
              className={`${styles.input} ${styles.textarea}`}
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
          <div className={styles.inputContainer}>
            <label htmlFor="dataInicio" className={styles.label}>
              Data de inicio do evento*
            </label>
            <input
              required
              value={values.dataInicio}
              onChange={handleChange}
              type="date"
              id="dataInicio"
              name="dataInicio"
              maxLength={10}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="dataFim" className={styles.label}>
              Data de fim do evento*
            </label>
            <input
              required
              value={values.dataFim}
              onChange={handleChange}
              type="date"
              id="dataFim"
              name="dataFim"
              maxLength={10}
              className={styles.input}
              min={dataMin}
            />
          </div>

          <div className={styles.botoes}>
            <button
              type="button"
              onClick={() => router.push("/editar/eventos-cidade")}
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

export default withSessionHOC(Evento);
