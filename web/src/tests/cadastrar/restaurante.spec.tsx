import { render, screen } from "@testing-library/react";
import CadastrarRestaurante from "src/pages/cadastrar/restaurante";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("src/infra/HttpClient", () => ({
  HttpClient: jest.fn(),
}));

describe("Página CadastrarRestaurante", () => {
  beforeEach(() => {
    render(<CadastrarRestaurante />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Cadastrar Restaurantes");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText(
      "Esse formulário serve para cadastrar restaurantes, lanchonetes, pizzarias, entre outras coisas onde os turistas possam se alimentar."
    );
    expect(texto).toBeVisible();
  });

  test("deve renderizar o formulário para cadastro", () => {
    const form = document.getElementsByTagName("form");
    expect(form[0]).toBeVisible();
  });
});
