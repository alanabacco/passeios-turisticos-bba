import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { HttpClient } from "src/infra/HttpClient";
import { withSessionHOC } from "src/services/auth/session";
import { tokenService } from "src/services/auth/tokenService";
import { mascararTelefone } from "src/utils/mascararTelefone";
import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "../forms-estilos.module.css";

interface EventProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    nome: { value: string };
    descricao: { value: string };
    endereco: { value: string };
    telefone: { value: string };
  };
}

function CadastrarInformacaoUtil(): JSX.Element {
  const router = useRouter();
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/informacoes-uteis`;
  const token = tokenService.get();

  const handleSubmit = async (e: EventProps) => {
    e.preventDefault();

    const dados = {
      nome: e.target.nome.value.trim(),
      descricao: e.target.descricao.value.trim(),
      endereco: e.target.endereco.value.trim(),
      telefone: e.target.telefone.value,
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

  return (
    <>
      <Head title="Cadastrar | Passeios Turísticos de Borborema" />
      <section className={comumStyles.mainContainer}>
        <div className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Cadastrar Informação Útil</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para cadastrar qualquer tipo de informação útil, como
            postos de combustíveis, farmácias, pronto socorro, entre outros.
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
              maxLength={240}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="telefone" className={styles.label}>
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(16) 00000-0000"
              minLength={14}
              maxLength={15}
              onKeyUp={mascararTelefone}
              className={`${styles.input} ${styles.inputNumber}`}
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

export default withSessionHOC(CadastrarInformacaoUtil);
