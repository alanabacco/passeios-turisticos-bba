import { render, screen } from "@testing-library/react";
import PaginaInicial from ".";

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
});
