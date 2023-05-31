import comumStyles from "src/styles/comum.module.css";
import styles from "./styles.module.css";
import Footer from "src/pages/components/Footer";
import Head from "src/infra/Head";
import { withSessionHOC } from "src/services/auth/session";
import { tokenService } from "src/services/auth/tokenService";
import { useRouter } from "next/router";

function CadastrarEvento() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const dados = {
      nome: e.target.nome.value.trim(),
      descricao: e.target.descricao.value.trim(),
      endereco: e.target.endereco.value.trim(),
      data_inicio: e.target.dataInicio.value,
      data_fim: e.target.dataFim.value,
    };
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/eventos`;
    const token = tokenService.get();
    const options = {
      method: "POST",
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
          router.push("/cadastrar");
        });
    } catch (error) {
      console.log(error);
      alert("Não foi possível cadastrar os dados, tente novamente mais tarde.");

      throw new Error("Não foi possível cadastrar os dados.");
    }
  };

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
              maxLength={240}
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
            />
          </div>

          <div className={styles.botoes}>
            <button
              type="button"
              onClick={() => router.push("/painel-administrativo")}
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