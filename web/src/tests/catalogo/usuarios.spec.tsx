import { render, screen } from "@testing-library/react";
import PaginaUsuarios from "src/pages/catalogo/usuarios";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("src/infra/HttpClient", () => ({
  HttpClient: jest.fn(),
}));

describe("Página usuarios", () => {
  beforeEach(() => {
    render(<PaginaUsuarios usuarios={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Usuários");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const text = screen.getByText("Lista de usuários do sistema.");
    expect(text).toBeVisible();
  });

  test("deve renderizar o componente footer", () => {
    const footer = document.getElementsByTagName("footer").item(0);
    expect(footer).toBeVisible();
  });
});
