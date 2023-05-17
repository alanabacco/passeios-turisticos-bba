import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import Head from "src/infra/Head";
import Card_1 from "src/pages/components/Card_01";

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
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Hospedagens</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de hotéis e outros tipos de hospedagens.
          </p>
        </section>
        <Card_1 item={hospedagens} />
      </main>
      <Footer />
    </>
  );
}
