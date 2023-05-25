import Footer from "src/pages/components/Footer";
import comumStyles from "src/styles/comum.module.css";
import styles from "./styles.module.css";
import Head from "src/infra/Head";
import BotaoVoltar from "src/pages/components/BotaoVoltar";

export const getServerSideProps = async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/eventos`;
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
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Eventos</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de eventos em nossa cidade.
          </p>
        </section>
        <section>
          <ul className={styles.itens}>
            {eventos.map((item: any) => {
              return (
                <li key={item.id} className={styles.item}>
                  <h2>{item.nome}</h2>
                  <p>Descrição: {item.descricao}</p>
                  <p>Endereço: {item.endereco}</p>
                  <p>Data de início: {item.data_inicio.split("-").reverse().join("-")}</p>
                  <p>Data de fim: {item.data_fim.split("-").reverse().join("-")}</p>
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
