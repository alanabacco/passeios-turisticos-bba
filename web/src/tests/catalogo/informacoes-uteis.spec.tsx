import { render, screen } from "@testing-library/react";
import PaginaInfoUteis from "src/pages/catalogo/informacoes-uteis";

describe("Página informacoes-uteis", () => {
  beforeEach(() => {
    render(<PaginaInfoUteis informacoesUteis={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Informações Úteis");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const text = screen.getByText(
      "Aqui você encontra uma lista de informações que podem ser úteis durante seu passeio."
    );
    expect(text).toBeVisible();
  });

  test("deve renderizar o componente footer", () => {
    const footer = document.getElementsByTagName("footer").item(0);
    expect(footer).toBeVisible();
  });
});
