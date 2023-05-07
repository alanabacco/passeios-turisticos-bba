import Footer from "../../components/Footer";
import styles from "./styles.module.css";
import comumStyles from "../../../styles/comum.module.css";

export async function getServerSideProps(context: any) {
  const API = `${process.env.API_URL}/restaurantes`;
  const restaurantes = await fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });

  return {
    props: { restaurantes },
  };
}

type Props = {
  restaurantes: [];
};

export default function PaginaRestaurantes({ restaurantes }: Props) {
  return (
    <>
      <main className={comumStyles.mainContainer}>
        <section className={comumStyles.introSection}>
          <h1 className={comumStyles.introTitulo}>Restaurantes</h1>
          <p className={comumStyles.introDescricao}>
            Aqui você encontra uma lista de restaurantes, lanchonetes, pizzarias e outros locais, para que você possa visitar em nossa cidade. 
          </p>
        </section>
        <section>
          <ul className={styles.itens}>
            {restaurantes.map((restaurante: any) => {
              return (
                <li key={restaurante.id} className={styles.item}>
                  <h2 className={styles.nomeItem}>{restaurante.nome}</h2>
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
