/* eslint-disable no-unused-vars */
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
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

interface ReusableFormProps {
  fields: Field[];
  initialValues: { [key: string]: string };
  onSubmit: (formData: { [key: string]: string }) => void;
  rotaBotaoCancelar?: string;
  textoBotaoSubmit?: string;
}

export default function Formulario({
  fields,
  initialValues,
  onSubmit,
  rotaBotaoCancelar = "/",
  textoBotaoSubmit = "Cadastrar",
}: ReusableFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<{ [key: string]: string }>(initialValues);
  const [dataMin, setDataMin] = useState(initialValues.dataInicio || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
      {fields.map((field, index) => (
        <div key={index} className={styles.inputContainer}>
          <label htmlFor={field.name} className={styles.label}>
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder || ""}
              required={field.required || false}
              className={`${styles.input} ${styles.textarea}`}
              maxLength={field.maxLength || undefined}
            />
          ) : (
            <input
              type={field.type || "text"}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder || ""}
              required={field.required || false}
              className={`${styles.input} ${
                field.type === "password" && styles.inputSenha
              }`}
              onKeyUp={field.type === "tel" ? mascararTelefone : undefined}
              min={field.type === "date" ? dataMin : undefined}
              minLength={field.minLength || undefined}
              maxLength={field.maxLength || undefined}
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
