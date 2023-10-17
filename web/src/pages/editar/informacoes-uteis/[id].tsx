import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "src/infra/Head";
import { HttpClient } from "src/infra/HttpClient";
import { tokenService } from "src/services/auth/tokenService";
import { withSessionHOC } from "src/services/auth/session";
import Footer from "src/components/Footer";
import Formulario from "src/components/Formulario";
import comumStyles from "src/styles/comum.module.css";

function InformacaoUtil(): JSX.Element {
  const [valoresIniciais, setValoresIniciais] = useState({
    nome: "",
    descricao: "",
    endereco: "",
    telefone: "",
  });
  const campos = [
    {
      label: "Nome*",
      name: "nome",
      required: true,
      type: "text",
      placeholder: "Digite o nome da informação",
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
      label: "Telefone",
      name: "telefone",
      type: "tel",
      placeholder: "(16) 00000-0000",
      minLength: 14,
      maxLength: 15,
    },
    {
      label: "Endereço",
      name: "endereco",
      type: "text",
      placeholder: "Digite o endereço",
      maxLength: 200,
    },
  ];

  const router = useRouter();
  const token = tokenService.get();

  const params = router.query;
  const API = `${process.env.NEXT_PUBLIC_API_URL}/informacoes-uteis/${params.id}`;

  useEffect(() => {
    try {
      HttpClient(API, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setValoresIniciais((valorAtual) => {
          return {
            ...valorAtual,
            nome: res.body.nome,
            telefone: res.body.telefone || "",
            descricao: res.body.descricao || "",
            endereco: res.body.endereco || "",
          };
        });
      });
    } catch (error) {
      console.log(error);
      alert("Não foi possível trazer os dados, tente novamente mais tarde.");
      throw new Error("Não foi possível trazer os dados.");
    }
  }, []);

  const handleSubmit = async (formData: { [key: string]: string }) => {
    const dados = {
      nome: formData["nome"].trim(),
      descricao: formData["descricao"].trim(),
      endereco: formData["endereco"].trim(),
      telefone: formData["telefone"],
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
          router.push("/editar/informacoes-uteis");
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
          <h1 className={comumStyles.introTitulo}>Editar Informação</h1>
          <p className={comumStyles.introDescricao}>
            Esse formulário serve para editar as informações.
          </p>
        </div>
        <Formulario
          inputs={campos}
          valoresIniciais={valoresIniciais}
          onSubmit={handleSubmit}
          rotaBotaoCancelar="/editar/informacoes-uteis"
          textoBotaoSubmit="Editar"
        />
      </section>
      <Footer />
    </>
  );
}

export default withSessionHOC(InformacaoUtil);
