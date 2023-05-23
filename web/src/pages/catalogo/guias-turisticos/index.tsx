import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "./styles.module.css";
import Head from "src/infra/Head";
import BotaoVoltar from "src/pages/components/BotaoVoltar";

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
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Guias Turísticos</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista guias turísticos que podem te guiar para os mais
            diversos passeios que existem na cidade.
          </p>
        </section>
        <section>
          <ul className={styles.itens}>
            {guias.map((item: any) => {
              return (
                <li key={item.id} className={styles.item}>
                  <h2>{item.nome}</h2>
                  <p>Telefone: {item.telefone}</p>
                  <p>Tipos de turismo: {item.tipos_turismo}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
