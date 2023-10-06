import { render, screen } from "@testing-library/react";
import PaginaUsuarios from "src/pages/catalogo/usuarios";

describe.skip("Página usuarios", () => {
  beforeEach(() => {
    render(<PaginaUsuarios usuarios={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Usuários");
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
