import { render, screen } from "@testing-library/react";
import CadastrarGuia from "src/pages/cadastrar/guia-turistico";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("src/infra/HttpClient", () => ({
  HttpClient: jest.fn(),
}));

describe("Página CadastrarGuia", () => {
  beforeEach(() => {
    render(<CadastrarGuia />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Cadastrar Guias Turísticos");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText(
      "Esse formulário serve para cadastrar guias turísticos, seu contato e os tipos de turismo oferecidos pelo guia."
    );
    expect(texto).toBeVisible();
  });

  test("deve renderizar o formulário para cadastro", () => {
    const form = document.getElementsByTagName("form");
    expect(form[0]).toBeVisible();
  });
});
