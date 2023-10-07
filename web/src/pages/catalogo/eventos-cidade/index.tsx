import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import BotaoVoltar from "src/components/BotaoVoltar";
import CardSection from "src/components/CardSection";
import Calendario from "src/components/Calendario";

export const getServerSideProps = async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/eventos-futuros`;
  const eventos = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      eventos,
    },
  };
};

type Props = {
  eventos: [];
};

export default function PaginaEventos({ eventos }: Props) {
  return (
    <>
      <Head title="Eventos | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Eventos</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de eventos em Borborema e região.
          </p>
        </section>

        <Calendario />

        <CardSection itens={eventos} />
      </main>
      <Footer />
    </>
  );
}
