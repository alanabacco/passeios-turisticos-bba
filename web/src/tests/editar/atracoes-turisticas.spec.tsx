import { render, screen } from "@testing-library/react";
import PaginaEditarAtracoes from "src/pages/editar/atracoes-turisticas";

describe("Página PaginaEditarAtracoes", () => {
  beforeEach(() => {
    render(<PaginaEditarAtracoes atracoes={[]} session={null} />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Atrações Turísticas");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText("Escolha um dos itens para editar.");
    expect(texto).toBeVisible();
  });
});
