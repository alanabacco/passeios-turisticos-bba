import Formulario from "../../components/Formulario";

function Evento(): JSX.Element {
  const fields = [
    {
      label: "Nome*",
      name: "nome",
      required: true,
      type: "text",
      placeholder: "Digite o nome",
    },
    {
      label: "Descrição",
      name: "descricao",
      type: "textarea",
      placeholder: "Digite a descrição",
    },
    {
      label: "Endereço",
      name: "endereco",
      type: "text",
      placeholder: "Digite o endereço",
    },
    {
      label: "Data de início do evento",
      name: "dataInicio",
      type: "date",
      required: true,
    },
    { label: "Data de fim do evento", name: "dataFim", type: "date", required: true },
    { label: "Telefone", name: "telefone", type: "tel", placeholder: "(00) 00000-0000" },
    {
      label: "Senha",
      name: "senha",
      required: true,
      type: "password",
      placeholder: "••••••••••",
    },
  ];

  const values = {
    nome: "",
    descricao: "",
    endereco: "",
    dataInicio: "2023-10-10",
    dataFim: "",
    telefone: "",
    senha: "",
  };

  const handleSubmit = (formData: { [key: string]: string }) => {
    console.log(formData["nome"], formData["descricao"]);
  };

  return <Formulario campos={fields} initialValues={values} onSubmit={handleSubmit} />;
}

export default Evento;
