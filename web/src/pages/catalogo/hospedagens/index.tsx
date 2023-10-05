import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import CardSection from "src/components/CardSection";
import BotaoVoltar from "src/components/BotaoVoltar";

export const getServerSideProps = async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/hospedagens`;
  const hospedagens = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      hospedagens,
    },
  };
};

type Props = {
  hospedagens: [];
};

export default function PaginaHospedagens({ hospedagens }: Props) {
  return (
    <>
      <Head title="Hospedagens | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Hospedagens</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de hotéis e outros tipos de hospedagens.
          </p>
        </section>
        <CardSection itens={hospedagens} />
      </main>
      <Footer />
    </>
  );
}
