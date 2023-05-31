import Footer from "src/pages/components/Footer";
import styles from "./styles.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSession } from "src/services/auth/session";
import Link from "next/link";
import { tokenService } from "src/services/auth/tokenService";
import { useRouter } from "next/router";
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

export default function PaginaExcluirEventos({ eventos, session }: Props) {
  const router = useRouter();

  async function handleClick(id: any) {
    const confirmaExclusao = confirm(
      "Esse item será excluído. Tem certeza que deseja continuar?"
    );

    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/eventos/${id}`;
    const token = tokenService.get();
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (confirmaExclusao) {
      try {
        await fetch(endpoint, options)
          .then(async (res) => {
            if (res.ok) {
              const resposta = await res.json();
              return resposta;
            }
          })
          .then(() => {
            router.push("/excluir/evento-cidade");
          });
      } catch (error) {
        console.log(error);
        alert("Não foi possível excluir os dados, tente novamente mais tarde.");
        throw new Error("Não foi possível excluir os dados.");
      }
    }
  }

  return (
    <>
      <Head title="Excluir | Passeios Turísticos de Borborema" />
      <main className={comumStyles.mainContainer}>
        <BotaoVoltar />
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Eventos</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para excluí-lo.
          </p>
        </section>
        <section>
          <ul className={styles.itens}>
            {eventos.map((item: any) => {
              return (
                <Link
                  href="/excluir/evento-cidade"
                  key={item.id}
                  className={styles.item}
                  onClick={() => handleClick(item.id)}
                >
                  <li>
                    <h2>{item.nome}</h2>
                    <p>Descrição: {item.descricao}</p>
                    <p>Endereço: {item.endereco}</p>
                    <p>Data de Início: {item.data_inicio.split("-").reverse().join("/")}</p>
                    <p>Data de Fim: {item.data_fim.split("-").reverse().join("/")}</p>
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
