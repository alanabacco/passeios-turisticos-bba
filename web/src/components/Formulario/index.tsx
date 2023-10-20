/* eslint-disable no-unused-vars */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mascararTelefone } from "src/utils/mascararTelefone";
import styles from "./styles.module.css";

interface Field {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface FormularioProps {
  inputs: Field[];
  valoresIniciais: { [key: string]: string };
  onSubmit: (formData: { [key: string]: string }) => void;
  rotaBotaoCancelar?: string;
  textoBotaoSubmit?: string;
}

export default function Formulario({
  inputs,
  valoresIniciais,
  onSubmit,
  rotaBotaoCancelar = "/",
  textoBotaoSubmit = "Cadastrar",
}: FormularioProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<{ [key: string]: string }>(valoresIniciais);
  const [dataMin, setDataMin] = useState(valoresIniciais.dataInicio || "");

  useEffect(() => {
    setFormData(valoresIniciais);
    if (valoresIniciais.dataInicio) setDataMin(valoresIniciais.dataInicio);
  }, [valoresIniciais]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    const maskedValue = e.target.type === "tel" ? mascararTelefone(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: maskedValue || "",
    }));

    if (name == "dataInicio") setDataMin(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <p className={styles.info}>Campos com * são obrigatórios.</p>
      {inputs.map((input, index) => (
        <div key={index} className={styles.inputContainer}>
          <label htmlFor={input.name} className={styles.label}>
            {input.label}
          </label>
          {input.type === "textarea" ? (
            <textarea
              id={input.name}
              name={input.name}
              value={formData[input.name]}
              onChange={handleChange}
              placeholder={input.placeholder || ""}
              required={input.required || false}
              className={`${styles.input} ${styles.textarea}`}
              maxLength={input.maxLength || undefined}
            />
          ) : (
            <input
              type={input.type || "text"}
              id={input.name}
              name={input.name}
              value={input.type !== "password" ? formData[input.name] : undefined}
              onChange={handleChange}
              placeholder={input.placeholder || ""}
              required={input.required || false}
              className={`${styles.input} ${
                input.type === "password" && styles.inputSenha
              }`}
              min={input.name === "dataFim" ? dataMin : undefined}
              minLength={input.minLength || undefined}
              maxLength={input.maxLength || undefined}
            />
          )}
        </div>
      ))}
      <div className={styles.botoes}>
        <button
          type="button"
          onClick={() => router.push(rotaBotaoCancelar)}
          className={styles.botaoCancelar}
        >
          Cancelar
        </button>
        <button type="submit" className={styles.botaoSubmit}>
          {textoBotaoSubmit}
        </button>
      </div>
    </form>
  );
}
