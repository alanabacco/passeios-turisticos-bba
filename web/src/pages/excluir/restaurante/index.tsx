import Footer from "src/pages/components/Footer";
import styles from "./styles.module.css";
import comumStyles from "src/styles/comum.module.css";
import { withSession } from "src/services/auth/session";
import Link from "next/link";
import { tokenService } from "src/services/auth/tokenService";
import { useRouter } from "next/router";

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

export default function PaginaExcluirRestaurantes({ restaurantes, session }: Props) {
  const router = useRouter();

  async function handleClick(id: any) {
    const confirmaExclusao = confirm(
      "Esse item será excluído. Tem certeza que deseja continuar?"
    );

    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/restaurantes/${id}`;
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
            router.push("/excluir/restaurante");
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
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Restaurantes</h1>
          <p className={comumStyles.introDescricao}>
            Escolha um dos itens para excluí-lo.
          </p>
        </section>
        <section>
          <ul className={styles.itens}>
            {restaurantes.map((restaurante: any) => {
              return (
                <Link
                  href="/excluir/restaurante"
                  key={restaurante.id}
                  className={styles.item}
                  onClick={() => handleClick(restaurante.id)}
                >
                  <li>
                    <h2>{restaurante.nome}</h2>
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
