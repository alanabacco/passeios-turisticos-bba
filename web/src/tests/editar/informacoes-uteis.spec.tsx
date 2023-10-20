import { render, screen } from "@testing-library/react";
import PaginaEditarInformacao from "src/pages/editar/informacoes-uteis";

describe("Página PaginaEditarInformacao", () => {
  beforeEach(() => {
    render(<PaginaEditarInformacao informacoesUteis={[]} session={null} />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Informações Úteis");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText("Escolha um dos itens para editar.");
    expect(texto).toBeVisible();
  });
});
