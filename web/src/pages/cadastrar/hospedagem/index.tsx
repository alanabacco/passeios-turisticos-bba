import comumStyles from "src/styles/comum.module.css";
import styles from "./styles.module.css";
import Footer from "src/pages/components/Footer";
import Head from "src/infra/Head";
import { withSessionHOC } from "src/services/auth/session";
import { tokenService } from "src/services/auth/tokenService";
import { useRouter } from "next/router";

function CadastrarHospedagem() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const dados = {
      nome: e.target.nome.value.trim(),
      descricao: e.target.descricao.value.trim(),
      endereco: e.target.endereco.value.trim(),
      telefone: e.target.telefone.value,
    };
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/hospedagens`;
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
      <Head title="Cadastrar | Passeios Turísticos de Borborema" />
      <section className={comumStyles.mainContainer}>
        <div className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Cadastrar Hospedagem</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para cadastrar qualquer tipo de hospedagem, como hotéis,
            acampamentos, entre outros.
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
              onKeyUp={handleTelefone}
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

export default withSessionHOC(CadastrarHospedagem);
