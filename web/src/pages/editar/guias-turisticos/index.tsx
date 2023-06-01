import Footer from "src/pages/components/Footer";
import styles from "../estilos-comuns.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSession } from "src/services/auth/session";
import Link from "next/link";
import Head from "src/infra/Head";
import BotaoVoltar from "src/pages/components/BotaoVoltar";

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

export default function PaginaEditarGuias({ guias, session }: Props) {
  return (
    <>
      <Head title="Editar | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar  href="/editar"/>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Guias Turísticos</h1>
          <p className={comumStyles.introDescricao}>Escolha um dos itens para editar.</p>
        </section>
        <section>
          <ul className={styles.itens}>
            {guias.map((item: any) => {
              return (
                <Link
                  href={`/editar/guias-turisticos/${item.id}`}
                  key={item.id}
                  className={styles.item}
                >
                  <li>
                    <h2>{item.nome}</h2>
                    <p>Telefone: {item.telefone}</p>
                    <p>Tipos de Turismo: {item.tipos_turismo}</p>
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
