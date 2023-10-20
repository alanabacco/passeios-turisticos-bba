import { render, screen } from "@testing-library/react";
import PaginaEditarHospedagem from "src/pages/editar/hospedagens";

describe("Página PaginaEditarHospedagem", () => {
  beforeEach(() => {
    render(<PaginaEditarHospedagem hospedagens={[]} session={null} />);
  });

  test("deve renderizar o título da página corretamente", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Hospedagens");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const texto = screen.getByText("Escolha um dos itens para editar.");
    expect(texto).toBeVisible();
  });
});
