import styles from "./styles.module.css";

type CardProps = {
  item: [];
};

function Card_1(itens = []): JSX.Element {
  return (
    <section>
      <ul className={styles.itens}>
        {itens.map((item: any) => {
          return (
            <li key={item.id} className={styles.item}>
              <h2>{item.nome}</h2>
              <p>Descrição: {item.descricao}</p>
              <p>Telefone: {item.telefone}</p>
              <p>Endereço: {item.endereco}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
