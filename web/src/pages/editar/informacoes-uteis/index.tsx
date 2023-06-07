import Head from "src/infra/Head";
import { withSession } from "src/services/auth/session";
import Footer from "src/pages/components/Footer";
import BotaoVoltar from "src/pages/components/BotaoVoltar";
import comumStyles from "src/styles/comum.module.css";
import CardSection from "src/pages/components/CardSection";

export const getServerSideProps = withSession(async (context: any) => {
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
      session: context.req.session,
      informacoesUteis,
    },
  };
});

type Props = {
  informacoesUteis: [];
  session: null;
};

export default function PaginaEditarInformacao({
  informacoesUteis,
  session,
}: Props): JSX.Element {
  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/editar" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Informações Úteis</h1>
          <p className={comumStyles.introDescricao}>Escolha um dos itens para editar.</p>
        </section>
        <CardSection itens={informacoesUteis} linkIdParam="/editar/informacoes-uteis/" />
      </main>
      <Footer />
    </>
  );
}
