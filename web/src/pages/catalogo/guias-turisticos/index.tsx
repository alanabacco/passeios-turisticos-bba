import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import BotaoVoltar from "src/components/BotaoVoltar";
import CardSection from "src/components/CardSection";

export const getServerSideProps = async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/guias-turisticos`;
  const guias = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      guias,
    },
  };
};

type Props = {
  guias: [];
};

export default function PaginaGuiasTuristicos({ guias }: Props) {
  return (
    <>
      <Head title="Guias Turísticos | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Guias Turísticos</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista guias turísticos que podem te guiar para os mais
            diversos passeios que existem na cidade.
          </p>
        </section>
        <CardSection itens={guias} />
      </main>
      <Footer />
    </>
  );
}
