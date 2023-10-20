import { render, screen } from "@testing-library/react";
import PaginaHospedagens from "src/pages/catalogo/hospedagens";

describe("Página hospedagens", () => {
  beforeEach(() => {
    render(<PaginaHospedagens hospedagens={[]} />);
  });

  test("deve renderizar o título principal da página", () => {
    const texto = screen.getByRole("heading", { level: 1 });
    expect(texto).toHaveTextContent("Hospedagens");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto da descrição corretamente", () => {
    const text = screen.getByText(
      "Aqui você encontra uma lista de hotéis e outros tipos de hospedagens."
    );
    expect(text).toBeVisible();
  });

  test("deve renderizar o componente footer", () => {
    const footer = document.getElementsByTagName("footer").item(0);
    expect(footer).toBeVisible();
  });
});
