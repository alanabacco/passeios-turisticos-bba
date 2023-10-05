import { useEffect, useState } from "react";
import { withSessionHOC } from "src/services/auth/session";
import { tokenService } from "src/services/auth/tokenService";
import { HttpClient } from "src/infra/HttpClient";
import Head from "src/infra/Head";
import Footer from "src/components/Footer";
import BotaoVoltar from "src/components/BotaoVoltar";
import comumStyles from "src/styles/comum.module.css";
import CardSection from "src/components/CardSection";

function PaginaUsuarios() {
  const token = tokenService.get();
  const API = `${process.env.NEXT_PUBLIC_API_URL}/usuarios`;

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    try {
      HttpClient(API, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setUsuarios(res.body);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Head title="Usuários | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Usuários</h1>
          <p className={comumStyles.introDescricao}>Lista de usuários do sistema.</p>
        </section>
        <CardSection itens={usuarios} />
      </main>
      <Footer />
    </>
  );
}

export default withSessionHOC(PaginaUsuarios);
