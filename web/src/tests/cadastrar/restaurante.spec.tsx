import { render, screen } from "@testing-library/react";
import CadastrarRestaurante from "src/pages/cadastrar/restaurante";
import { jest } from "@jest/globals";

// referência: https://stackoverflow.com/questions/76858797/error-invariant-expected-app-router-to-be-mounted-why-this-happened-when-using
// Mock useRouter:
jest.mock("next/router", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe.skip("Cadastrar Restaurante", () => {
  beforeEach(() => {
    render(<CadastrarRestaurante />);
  });

  test("input nome deve ser required", () => {
    const input = screen.getByPlaceholderText("Digite o nome do lugar");
    expect(input).toHaveAttribute("required");
  });
});
