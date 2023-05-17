import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import Card_1 from "src/pages/components/Card_01";

export const getServerSideProps = async (context: any) => {
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
      restaurantes,
    },
  };
};

type Props = {
  restaurantes: [];
};

export default function PaginaRestaurantes({ restaurantes }: Props) {
  return (
    <>
      <Head title="Restaurantes | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Restaurantes</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de restaurantes, lanchonetes, pizzarias e outros
            locais, para que você possa visitar em nossa cidade.
          </p>
        </section>
        <Card_1 item={restaurantes} />
      </main>
      <Footer />
    </>
  );
}
