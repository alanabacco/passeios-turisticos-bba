import { render, screen } from "@testing-library/react";
import PaginaGuiasTuristicos from "src/pages/catalogo/guias-turisticos";

describe("Página guias-turisticos", () => {
  beforeEach(() => {
    render(<PaginaGuiasTuristicos guias={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Guias Turísticos");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const text = screen.getByText(
      "Aqui você encontra uma lista guias turísticos que podem te guiar para os mais diversos passeios que existem na cidade."
    );
    expect(text).toBeVisible();
  });

  test("deve renderizar o componente footer", () => {
    const footer = document.getElementsByTagName("footer").item(0);
    expect(footer).toBeVisible();
  });
});
