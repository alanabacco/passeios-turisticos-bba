import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import CardSection from "src/pages/components/CardSection";
import BotaoVoltar from "src/pages/components/BotaoVoltar";

export const getServerSideProps = async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/informacoes-uteis`;
  const informacoesUteis = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      informacoesUteis,
    },
  };
};

type Props = {
  informacoesUteis: [];
};

export default function PaginaInfoUteis({ informacoesUteis }: Props) {
  return (
    <>
      <Head title="Informações Úteis | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Informações Úteis</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de informações que podem ser úteis durante seu passeio.
          </p>
        </section>
        <CardSection itens={informacoesUteis} />
      </main>
      <Footer />
    </>
  );
}
