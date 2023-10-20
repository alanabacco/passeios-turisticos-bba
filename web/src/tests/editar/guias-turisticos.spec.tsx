import { render, screen } from "@testing-library/react";
import PaginaEditarGuias from "src/pages/editar/guias-turisticos";

describe("Página PaginaEditarGuias", () => {
  beforeEach(() => {
    render(<PaginaEditarGuias guias={[]} session={null} />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Guias Turísticos");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText("Escolha um dos itens para editar.");
    expect(texto).toBeVisible();
  });
});
