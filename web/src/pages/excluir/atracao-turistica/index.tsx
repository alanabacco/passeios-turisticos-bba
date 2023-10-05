import { useRouter } from "next/router";
import Link from "next/link";
import Head from "src/infra/Head";
import { withSession } from "src/services/auth/session";
import { tokenService } from "src/services/auth/tokenService";
import Footer from "src/components/Footer";
import BotaoVoltar from "src/components/BotaoVoltar";
import styles from "../estilos-comuns.module.css";
import comumStyles from "src/styles/comum.module.css";
import { AtracaoTuristica } from "src/utils/tipos";

export const getServerSideProps = withSession(async (context: any) => {
  const API = `${process.env.NEXT_PUBLIC_API_URL}/atracoes-turisticas`;
  const atracoes = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      session: context.req.session,
      atracoes,
    },
  };
});

type Props = {
  atracoes: [];
  session: null;
};

export default function PaginaExcluirAtracoes({ atracoes, session }: Props): JSX.Element {
  const router = useRouter();

  async function handleClick(id: number) {
    const confirmaExclusao = confirm(
      "Esse item será excluído. Tem certeza que deseja continuar?"
    );

    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/atracoes-turisticas/${id}`;
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
            router.push("/excluir/atracao-turistica");
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
        <BotaoVoltar href="/excluir"/>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Atrações Turísticas</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para excluí-lo.
          </p>
        </section>
        <section>
          {atracoes.length > 0 ? (
            <ul className={styles.itens}>
              {atracoes.map((item: AtracaoTuristica) => {
                return (
                  <Link
                    href="/excluir/atracao-turistica"
                    key={item.id}
                    className={styles.item}
                    onClick={() => handleClick(item.id)}
                  >
                    <li>
                      <h2>{item.nome}</h2>
                      <p>Descrição: {item.descricao}</p>
                      <p>Telefone: {item.telefone}</p>
                      <p>Endereço: {item.endereco}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          ) : (
            <p>Não há itens cadastrados aqui.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
