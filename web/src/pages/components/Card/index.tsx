import styles from "./styles.module.css";

type Item = {
  id: string;
  createdAt: string;
  updatedAt: string;
  nome: string;
  descricao?: string;
  endereco?: string;
  telefone?: string;
  data_inicio?: string;
  data_fim?: string;
  tipos_turismo?: string;
};

type CardProps<T extends Item> = {
  itens: T[];
};

const keyLabels: Record<keyof Item, string> = {
  descricao: "Descrição",
  endereco: "Endereço",
  telefone: "Telefone",
  data_inicio: "Data de início",
  data_fim: "Data de fim",
  tipos_turismo: "Tipos de turismo",
  id: "",
  createdAt: "",
  updatedAt: "",
  nome: "Nome",
};

const Card = <T extends Item>({ itens }: CardProps<T>): JSX.Element => (
  <section>
    <ul className={styles.itens}>
      {itens.map((item) => {
        const { id, createdAt, updatedAt, nome, ...rest } = item;

        return (
          <li key={id} className={styles.item}>
            <h2 key={nome}>{nome}</h2>
            {Object.entries(rest).map(([key, value]) => {
              if (key === "data_inicio" || key === "data_fim") {
                return (
                  <p key={key}>
                    {keyLabels[key] || key}: {value.split("-").reverse().join("/")}
                  </p>
                );
              }
              return (
                <p key={key}>
                  {keyLabels[key as keyof Item] || key}: {value}
                </p>
              );
            })}
          </li>
        );
      })}
    </ul>
  </section>
);

export default Card;
