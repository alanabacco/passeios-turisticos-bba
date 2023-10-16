import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { HttpClient } from "src/infra/HttpClient";
import { tokenService } from "src/services/auth/tokenService";
import { withSessionHOC } from "src/services/auth/session";
import Formulario from "src/components/Formulario";
import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";

function CadastrarEvento(): JSX.Element {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    endereco: "",
    data_inicio: "",
    data_fim: "",
  };
  const campos = [
    {
      label: "Nome*",
      name: "nome",
      required: true,
      type: "text",
      placeholder: "Digite o nome do evento",
      minLength: 3,
    },
    {
      label: "Descrição",
      name: "descricao",
      type: "textarea",
      placeholder: "Digite a descrição",
      maxLength: 250,
    },
    {
      label: "Endereço",
      name: "endereco",
      type: "text",
      placeholder: "Digite o endereço",
      maxLength: 200,
    },
    {
      label: "Data de início do evento*",
      name: "dataInicio",
      type: "date",
      required: true,
    },
    {
      label: "Data de fim do evento*",
      name: "dataFim",
      type: "date",
      required: true,
    },
  ];

  const router = useRouter();
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/eventos`;
  const token = tokenService.get();

  const handleSubmit = async (formData: { [key: string]: string }) => {
    const dados = {
      nome: formData["nome"].trim(),
      descricao: formData["descricao"].trim(),
      endereco: formData["endereco"].trim(),
      data_inicio: formData["dataInicio"],
      data_fim: formData["dataFim"],
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
          <h1 className={comumStyles.introTitulo}>Cadastrar Eventos</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para cadastrar eventos da cidade.
          </p>
        </div>
        <Formulario
          inputs={campos}
          valoresIniciais={valoresIniciais}
          onSubmit={handleSubmit}
          rotaBotaoCancelar="/cadastrar"
        />
      </section>
      <Footer />
    </>
  );
}

export default withSessionHOC(CadastrarEvento);
