import { render, screen } from "@testing-library/react";
import CadastrarHospedagem from "src/pages/cadastrar/hospedagem";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("src/infra/HttpClient", () => ({
  HttpClient: jest.fn(),
}));

describe("Página CadastrarHospedagem", () => {
  beforeEach(() => {
    render(<CadastrarHospedagem />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Cadastrar Hospedagem");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText(
      "Esse formulário serve para cadastrar qualquer tipo de hospedagem, como hotéis, acampamentos, entre outros."
    );
    expect(texto).toBeVisible();
  });

  test("deve renderizar o formulário para cadastro", () => {
    const form = document.getElementsByTagName("form");
    expect(form[0]).toBeVisible();
  });
});
