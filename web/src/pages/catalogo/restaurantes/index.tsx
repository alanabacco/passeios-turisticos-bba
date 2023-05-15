import Footer from "src/pages/components/Footer";
import styles from "./styles.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSession } from "src/services/auth/session";
import Head from "src/infra/Head";

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

export default function PaginaRestaurantes({ restaurantes, session }: Props) {
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
        <section>
          <ul className={styles.itens}>
            {restaurantes.map((restaurante: any) => {
              return (
                <li key={restaurante.id} className={styles.item}>
                  <h2>{restaurante.nome}</h2>
                  <p>Descrição: {restaurante.descricao}</p>
                  <p>Telefone: {restaurante.telefone}</p>
                  <p>Endereço: {restaurante.endereco}</p>
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
