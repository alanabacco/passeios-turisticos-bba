import Head from "src/infra/Head";
import { withSession } from "src/services/auth/session";
import Footer from "src/components/Footer";
import BotaoVoltar from "src/components/BotaoVoltar";
import comumStyles from "src/styles/comum.module.css";
import CardSection from "src/components/CardSection";

export const getServerSideProps = withSession(async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/restaurantes`;
  const restaurantes = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      session: context.req.session,
      restaurantes,
    },
  };
});

type Props = {
  restaurantes: [];
  session: null;
};

export default function PaginaEditarRestaurantes({
  restaurantes,
  session,
}: Props): JSX.Element {
  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/editar" />
        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Restaurantes</h1>
          <p className={comumStyles.introDescricao}>Escolha um dos itens para editar.</p>
        </section>
        <CardSection itens={restaurantes} linkIdParam="/editar/restaurantes/" />
      </main>
      <Footer />
    </>
  );
}
