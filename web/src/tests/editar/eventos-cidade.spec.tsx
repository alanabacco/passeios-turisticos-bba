import { render, screen } from "@testing-library/react";
import PaginaEditarEventos from "src/pages/editar/eventos-cidade";

describe("Página PaginaEditarEventos", () => {
  beforeEach(() => {
    render(<PaginaEditarEventos eventos={[]} session={null} />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Eventos");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText("Escolha um dos itens para editar.");
    expect(texto).toBeVisible();
  });
});
