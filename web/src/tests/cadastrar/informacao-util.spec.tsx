import { render, screen } from "@testing-library/react";
import CadastrarInformacaoUtil from "src/pages/cadastrar/informacao-util";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("src/infra/HttpClient", () => ({
  HttpClient: jest.fn(),
}));

describe("Página CadastrarInformacaoUtil", () => {
  beforeEach(() => {
    render(<CadastrarInformacaoUtil />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Cadastrar Informação Útil");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText(
      "Esse formulário serve para cadastrar qualquer tipo de informação útil, como postos de combustíveis, farmácias, pronto socorro, entre outros."
    );
    expect(texto).toBeVisible();
  });

  test("deve renderizar o formulário para cadastro", () => {
    const form = document.getElementsByTagName("form");
    expect(form[0]).toBeVisible();
  });
});
