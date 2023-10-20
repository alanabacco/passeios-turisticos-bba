import { render, screen } from "@testing-library/react";
import PaginaRestaurantes from "src/pages/catalogo/restaurantes";

describe("Página restaurantes", () => {
  beforeEach(() => {
    render(<PaginaRestaurantes restaurantes={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Restaurantes");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const text = screen.getByText(
      "Aqui você encontra uma lista de restaurantes, lanchonetes, pizzarias e outros locais, para que você possa visitar em nossa cidade."
    );
    expect(text).toBeVisible();
  });

  test("deve renderizar o componente footer", () => {
    const footer = document.getElementsByTagName("footer").item(0);
    expect(footer).toBeVisible();
  });
});
