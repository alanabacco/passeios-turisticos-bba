import { render, screen } from "@testing-library/react";
import PaginaEventos from "src/pages/catalogo/eventos-cidade";

describe("Página eventos-cidade", () => {
  beforeEach(() => {
    render(<PaginaEventos eventos={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Eventos");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const text = screen.getByText(
      "Aqui você encontra uma lista de eventos em Borborema e região."
    );
    expect(text).toBeVisible();
  });

  test("deve renderizar o componente footer", () => {
    const footer = document.getElementsByTagName("footer").item(0);
    expect(footer).toBeVisible();
  });
});
