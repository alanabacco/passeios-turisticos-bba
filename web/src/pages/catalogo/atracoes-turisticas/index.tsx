import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import Card_1 from "src/pages/components/Card_01";
import BotaoVoltar from "src/pages/components/BotaoVoltar";

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
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Atrações Turísticas</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de atrações turísticas.
          </p>
        </section>
        <Card_1 item={atracoesTuristicas} />
      </main>
      <Footer />
    </>
  );
}
