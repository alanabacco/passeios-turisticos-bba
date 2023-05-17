import styles from "./styles.module.css";

type CardProps = {
  item: [];
};

export default function Card_1({ item = [] }: CardProps): JSX.Element {
  return (
    <section>
      <ul className={styles.itens}>
        {item.map((item: any) => {
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
