import { render, screen } from "@testing-library/react";
import PaginaAtrTuristicas from "src/pages/catalogo/atracoes-turisticas";

describe("Página atracoes-turisticas", () => {
  beforeEach(() => {
    render(<PaginaAtrTuristicas atracoesTuristicas={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Atrações Turísticas");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const text = screen.getByText("Aqui você encontra uma lista de atrações turísticas.");
    expect(text).toBeVisible();
  });

  test("deve renderizar o componente footer", () => {
    const footer = document.getElementsByTagName("footer").item(0);
    expect(footer).toBeVisible();
  });
});
