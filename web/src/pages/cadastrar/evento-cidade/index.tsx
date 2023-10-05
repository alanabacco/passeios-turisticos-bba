import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { tokenService } from "src/services/auth/tokenService";
import { withSessionHOC } from "src/services/auth/session";
import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "../forms-estilos.module.css";
import { HttpClient } from "src/infra/HttpClient";

interface EventProps extends ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    nome: { value: string };
    descricao: { value: string };
    endereco: { value: string };
    data_inicio: { value: Date };
    data_fim: { value: Date };
  };
}

function CadastrarEvento(): JSX.Element {
  const dataAtual = new Date();
  const dataAtualInvertida = dataAtual
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("-");

  const [dataMin, setDataMin] = useState(dataAtualInvertida);

  const router = useRouter();
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/eventos`;
  const token = tokenService.get();

  const handleSubmit = async (e: EventProps) => {
    e.preventDefault();

    const dados = {
      nome: e.target.nome.value.trim(),
      descricao: e.target.descricao.value.trim(),
      endereco: e.target.endereco.value.trim(),
      data_inicio: e.target.dataInicio.value,
      data_fim: e.target.dataFim.value,
    };

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: dados,
    };

    try {
      HttpClient(endpoint, options)
        .then((res) => {
          if (res.ok) {
            const resposta = res.body;
            return resposta;
          }
        })
        .then(() => {
          router.push("/cadastrar");
        });
    } catch (error) {
      console.log(error);
      alert("Não foi possível cadastrar os dados, tente novamente mais tarde.");
      throw new Error("Não foi possível cadastrar os dados.");
    }
  };

  function handleDataFim(e: ChangeEvent<HTMLInputElement>) {
    const dataMin = e.target.value;
    setDataMin(dataMin);
  }

  return (
    <>
      <Head title="Cadastrar | Passeios Turísticos de Borborema" />
      <section className={comumStyles.mainContainer}>
        <div className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Cadastrar Eventos</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para cadastrar eventos da cidade.
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
              placeholder="Digite o nome do evento"
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
              maxLength={250}
              className={`${styles.input} ${styles.textarea}`}
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
              maxLength={200}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="dataInicio" className={styles.label}>
              Data de início do evento*
            </label>
            <input
              required
              type="date"
              id="dataInicio"
              name="dataInicio"
              maxLength={10}
              className={styles.input}
              onChange={handleDataFim}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="dataFim" className={styles.label}>
              Data de fim do evento*
            </label>
            <input
              required
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
              onClick={() => router.push("/cadastrar")}
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

export default withSessionHOC(CadastrarEvento);
