import Head from "src/infra/Head";
import { withSession } from "src/services/auth/session";
import BotaoVoltar from "src/components/BotaoVoltar";
import Footer from "src/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import CardSection from "src/components/CardSection";

export const getServerSideProps = withSession(async (context: any) => {
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
      session: context.req.session,
      guias,
    },
  };
});

type Props = {
  guias: [];
  session: null;
};

export default function PaginaEditarGuias({ guias, session }: Props): JSX.Element {
  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/editar" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Guias Turísticos</h1>
          <p className={comumStyles.introDescricao}>Escolha um dos itens para editar.</p>
        </section>
        <CardSection itens={guias} linkIdParam="/editar/guias-turisticos/" />
      </main>
      <Footer />
    </>
  );
}
