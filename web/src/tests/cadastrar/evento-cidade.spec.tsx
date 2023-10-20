import { render, screen } from "@testing-library/react";
import CadastrarEvento from "src/pages/cadastrar/evento-cidade";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("src/infra/HttpClient", () => ({
  HttpClient: jest.fn(),
}));

describe("Página CadastrarEvento", () => {
  beforeEach(() => {
    render(<CadastrarEvento />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Cadastrar Eventos");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText(
      "Esse formulário serve para cadastrar eventos da cidade e região."
    );
    expect(texto).toBeVisible();
  });

  test("deve renderizar o formulário para cadastro", () => {
    const form = document.getElementsByTagName("form");
    expect(form[0]).toBeVisible();
  });
});
