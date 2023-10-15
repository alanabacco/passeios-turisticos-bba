import { useRouter } from "next/router";
import { authService } from "src/services/auth/authService";
import Head from "src/infra/Head";
import Formulario from "src/components/Formulario";
import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";

export default function Login(): JSX.Element {
  const router = useRouter();

  const valoresIniciais = {
    nomeUsuario: "",
    senha: "",
  };

  const campos = [
    {
      label: "Nome de usuário*",
      name: "nomeUsuario",
      required: true,
      type: "text",
      placeholder: "Usuário",
      minLength: 3,
    },
    {
      label: "Senha*",
      name: "senha",
      required: true,
      type: "password",
      placeholder: "••••••••••",
      minLength: 6,
    },
  ];

  function handleSubmit(formData: { [key: string]: string }) {
    authService
      .login({
        nome: formData["nomeUsuario"],
        senha: formData["senha"],
      })
      .then(() => {
        router.push("/painel-administrativo");
      })
      .catch((err) => {
        console.log(err);
        alert("Usuário ou senha inválidos.");
      });
  }

  return (
    <>
      <Head title="Login | Passeios Turísticos de Borborema" />
      <div className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Entrar com usuário e senha</h1>
        </section>
        <Formulario
          inputs={campos}
          valoresIniciais={valoresIniciais}
          onSubmit={handleSubmit}
          textoBotaoSubmit="Entrar"
        />
      </div>
      <Footer />
    </>
  );
}
