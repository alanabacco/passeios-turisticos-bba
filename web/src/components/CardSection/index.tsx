/* eslint-disable indent */
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

type Item = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  nome: string;
  descricao?: string;
  endereco?: string;
  telefone?: string;
  data_inicio?: string;
  data_fim?: string;
  tipos_turismo?: string;
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
  deletedAt: "",
  nome: "Nome",
};

type CardSectionProps<T extends Item> = {
  itens: T[];
  linkIdParam?: string;
};

const CardSection: FC<CardSectionProps<Item>> = ({ itens = [], linkIdParam }) => (
  <section>
    {itens.length > 0 ? (
      <ul className={styles.itens}>
        {itens.map(({ id, createdAt, updatedAt, deletedAt, nome, ...rest }) => {
          const lista = (
            <li
              key={id}
              className={!linkIdParam ? styles.item : ""}
              tabIndex={linkIdParam ? -1 : 0}
            >
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

          if (linkIdParam) {
            const listaComLink = (
              <Link href={`${linkIdParam}${id}`} key={id} className={styles.item}>
                {lista}
              </Link>
            );

            return listaComLink;
          }
          return lista;
        })}
      </ul>
    ) : (
      <p>Não há itens cadastrados aqui.</p>
    )}
  </section>
);

export default CardSection;
