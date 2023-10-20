import { render, screen } from "@testing-library/react";
import PaginaEditarRestaurantes from "src/pages/editar/restaurantes";

describe("Página PaginaEditarRestaurantes", () => {
  beforeEach(() => {
    render(<PaginaEditarRestaurantes restaurantes={[]} session={null} />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Restaurantes");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText("Escolha um dos itens para editar.");
    expect(texto).toBeVisible();
  });
});
