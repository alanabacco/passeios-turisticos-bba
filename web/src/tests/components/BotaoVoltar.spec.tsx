import { render, screen } from "@testing-library/react";
import BotaoVoltar from "src/components/BotaoVoltar";

describe("Componente BotaoVoltar", () => {
  beforeEach(() => {
    render(<BotaoVoltar href="/" />);
  });

  test("deve renderizar o texto corretamente", () => {
    const texto = screen.getByText("Voltar");
    expect(texto).toBeVisible();
  });

  test("deve renderizar o icon", () => {
    const icon = document.getElementsByClassName("icon").item(0);
    expect(icon).toBeVisible();
  });

  test("deve conter o atributo 'href' no link", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
