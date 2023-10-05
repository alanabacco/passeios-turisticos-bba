import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import CardSection from "src/components/CardSection";
import BotaoVoltar from "src/components/BotaoVoltar";

export const getServerSideProps = async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/atracoes-turisticas`;
  const atracoesTuristicas = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      atracoesTuristicas,
    },
  };
};

type Props = {
  atracoesTuristicas: [];
};

export default function PaginaAtrTuristicas({ atracoesTuristicas }: Props) {
  return (
    <>
      <Head title="Atrações Turísticas | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Atrações Turísticas</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de atrações turísticas.
          </p>
        </section>
        <CardSection itens={atracoesTuristicas} />
      </main>
      <Footer />
    </>
  );
}
