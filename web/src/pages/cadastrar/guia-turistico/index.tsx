import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { HttpClient } from "src/infra/HttpClient";
import { withSessionHOC } from "src/services/auth/session";
import { tokenService } from "src/services/auth/tokenService";
import Footer from "src/components/Footer";
import Formulario from "src/components/Formulario";
import comumStyles from "src/styles/comum.module.css";

function CadastrarGuia(): JSX.Element {
  const valoresIniciais = {
    nome: "",
    telefone: "",
    tiposTurismo: "",
  };
  const campos = [
    {
      label: "Nome*",
      name: "nome",
      required: true,
      type: "text",
      placeholder: "Digite o nome do guia",
      minLength: 3,
    },
    {
      label: "Telefone",
      name: "telefone",
      type: "tel",
      placeholder: "(16) 00000-0000",
      minLength: 14,
      maxLength: 15,
    },
    {
      label: "Tipos de Turismo",
      name: "tiposTurismo",
      type: "text",
      placeholder: "ex: pesca - trilha - ciclismo - camping",
      maxLength: 200,
    },
  ];

  const router = useRouter();
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/guias-turisticos`;
  const token = tokenService.get();

  const handleSubmit = async (formData: { [key: string]: string }) => {
    const dados = {
      nome: formData["nome"].trim(),
      telefone: formData["telefone"],
      tipos_turismo: formData["tiposTurismo"].trim(),
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
          <h1 className={comumStyles.introTitulo}>Cadastrar Guias Turísticos</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para cadastrar guias turísticos, seu contato e os tipos
            de turismo oferecidos pelo guia.
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

export default withSessionHOC(CadastrarGuia);
