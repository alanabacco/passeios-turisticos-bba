import { render, screen } from "@testing-library/react";
import PaginaInicial from "../pages";

describe("Página inicial", () => {
  beforeEach(() => {
    render(<PaginaInicial />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Passeios Turísticos de Borborema");
  });

  test("deve renderizar os links da página", () => {
    const nav = screen.queryByRole("navigation");
    expect(nav).toBeVisible();
  });

  test("deve renderizar 8 links do conteúdo da página", () => {
    const li = screen.getAllByRole("listitem");
    expect(li).toHaveLength(8);
  });
});
