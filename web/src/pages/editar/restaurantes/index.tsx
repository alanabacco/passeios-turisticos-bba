import Footer from "src/pages/components/Footer";
import styles from "./indexStyles.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSession } from "src/services/auth/session";
import Link from "next/link";

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

export default function PaginaEditarRestaurantes({ restaurantes, session }: Props) {
  return (
    <>
      <main className={comumStyles.mainContainer}>
        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Restaurantes</h1>
          <p className={comumStyles.introDescricao}>Escolha um dos itens para editar.</p>
        </section>
        <section>
          <ul className={styles.itens}>
            {restaurantes.map((restaurante: any) => {
              return (
                <Link
                  href={`/editar/restaurantes/${restaurante.id}`}
                  key={restaurante.id}
                  className={styles.item}
                >
                  <li>
                    <h2 className={styles.nomeItem}>{restaurante.nome}</h2>
                    <p>Descrição: {restaurante.descricao}</p>
                    <p>Telefone: {restaurante.telefone}</p>
                    <p>Endereço: {restaurante.endereco}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
