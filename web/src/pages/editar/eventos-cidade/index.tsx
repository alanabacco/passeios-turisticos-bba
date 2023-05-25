import Footer from "src/pages/components/Footer";
import styles from "./indexStyles.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSession } from "src/services/auth/session";
import Link from "next/link";
import Head from "src/infra/Head";
import BotaoVoltar from "src/pages/components/BotaoVoltar";

export const getServerSideProps = withSession(async (context: any) => {
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
      session: context.req.session,
      eventos,
    },
  };
});

type Props = {
  eventos: [];
  session: null;
};

export default function PaginaEditarEventos({ eventos, session }: Props) {
  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar href="/editar" />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Eventos</h1>
          <p className={comumStyles.introDescricao}>Escolha um dos itens para editar.</p>
        </section>
        <section>
          <ul className={styles.itens}>
            {eventos.map((item: any) => {
              return (
                <Link
                  href={`/editar/eventos-cidade/${item.id}`}
                  key={item.id}
                  className={styles.item}
                >
                  <li>
                    <h2>{item.nome}</h2>
                    <p>Descrição: {item.descricao}</p>
                    <p>Endereço: {item.endereco}</p>
                    <p>Data de Início: {item.data_inicio.split("-").reverse().join("-")}</p>
                    <p>Data de Fim: {item.data_fim.split("-").reverse().join("-")}</p>
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
