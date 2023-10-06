import { fireEvent, render } from "@testing-library/react";
import { mascararTelefone } from "src/utils/mascararTelefone";

describe("mascararNumero", () => {
  test("deve mascarar o telefone corretamente ao digitar", () => {
    const { container } = render(<input onKeyDown={mascararTelefone} />);
    const input = container.querySelector("input");

    fireEvent.change(input as Element, { target: { value: "16987654321" } });
    fireEvent.keyDown(input as Element, { key: "1", code: "Digit1" });
    fireEvent.keyDown(input as Element, { key: "6", code: "Digit6" });
    fireEvent.keyDown(input as Element, { key: "9", code: "Digit9" });
    fireEvent.keyDown(input as Element, { key: "8", code: "Digit8" });
    fireEvent.keyDown(input as Element, { key: "7", code: "Digit7" });
    fireEvent.keyDown(input as Element, { key: "6", code: "Digit6" });
    fireEvent.keyDown(input as Element, { key: "5", code: "Digit5" });
    fireEvent.keyDown(input as Element, { key: "4", code: "Digit4" });
    fireEvent.keyDown(input as Element, { key: "3", code: "Digit3" });
    fireEvent.keyDown(input as Element, { key: "2", code: "Digit2" });
    fireEvent.keyDown(input as Element, { key: "1", code: "Digit1" });

    expect(input?.value).toBe("(16) 98765-4321");
  });
});
