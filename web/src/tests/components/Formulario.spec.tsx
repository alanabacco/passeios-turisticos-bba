import { render, fireEvent, screen } from "@testing-library/react";
import Formulario from "src/components/Formulario";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("src/utils/mascararTelefone", () => jest.fn());

describe("Componente Formulario", () => {
  const onSubmitMock = jest.fn();

  const valoresIniciais = {
    evento: "",
    descricao: "",
  };
  const campos = [
    {
      label: "Nome evento*",
      name: "evento",
      required: true,
      type: "text",
      placeholder: "evento",
      minLength: 3,
    },
    {
      label: "Descrição",
      name: "descricao",
      type: "textarea",
      placeholder: "descrição",
    },
    {
      label: "Telefone",
      name: "telefone",
      type: "tel",
    },
  ];

  beforeEach(() => {
    render(
      <Formulario
        inputs={campos}
        valoresIniciais={valoresIniciais}
        onSubmit={onSubmitMock}
      />
    );
  });

  test("deve renderizar o texto corretamente", () => {
    const texto = screen.getByText("Campos com * são obrigatórios.");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o componente com as entradas corretas", () => {
    campos.forEach((input) => {
      const inputElement = screen.getByLabelText(input.label);
      expect(inputElement).toBeVisible();
    });
  });

  test("deve atualizar os dados do formulário na mudança de entrada no campo evento", () => {
    const eventoInput = screen.getByLabelText("Nome evento*");
    fireEvent.change(eventoInput, { target: { value: "Evento Fictício" } });
    expect(eventoInput.value).toBe("Evento Fictício");
  });

  test("deve ter o atributo 'required=true' no input", () => {
    const eventoInput = screen.getByLabelText("Nome evento*");
    expect(eventoInput).toHaveAttribute("required");
  });

  test("deve enviar dados do formulário ao clicar no botão", () => {
    const eventoInput = screen.getByLabelText("Nome evento*");
    const descricaoInput = screen.getByLabelText("Descrição");
    const submitButton = screen.getByText("Cadastrar");

    fireEvent.change(eventoInput, { target: { value: "Evento Fictício" } });
    fireEvent.change(descricaoInput, {
      target: { value: "descrição do evento fictício" },
    });

    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith({
      evento: "Evento Fictício",
      descricao: "descrição do evento fictício",
    });
  });

  test("deve ter atributo 'type=tel' o campo telefone", () => {
    const telefoneInput = screen.getByLabelText("Telefone");
    expect(telefoneInput).toHaveAttribute("type", "tel");
  });
});
