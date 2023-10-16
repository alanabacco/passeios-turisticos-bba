// describe("mascararNumero", () => {
//   test("deve mascarar o telefone corretamente ao digitar celular", () => {
//     const { container } = render(<input onKeyUp={mascararTelefone} />);
//     const input = container.querySelector("input");

//     fireEvent.change(input as Element, { target: { value: "16987654321" } });
//     fireEvent.keyUp(input as Element, { key: "1", code: "Digit1" });
//     fireEvent.keyUp(input as Element, { key: "6", code: "Digit6" });
//     fireEvent.keyUp(input as Element, { key: "9", code: "Digit9" });
//     fireEvent.keyUp(input as Element, { key: "8", code: "Digit8" });
//     fireEvent.keyUp(input as Element, { key: "7", code: "Digit7" });
//     fireEvent.keyUp(input as Element, { key: "6", code: "Digit6" });
//     fireEvent.keyUp(input as Element, { key: "5", code: "Digit5" });
//     fireEvent.keyUp(input as Element, { key: "4", code: "Digit4" });
//     fireEvent.keyUp(input as Element, { key: "3", code: "Digit3" });
//     fireEvent.keyUp(input as Element, { key: "2", code: "Digit2" });
//     fireEvent.keyUp(input as Element, { key: "1", code: "Digit1" });

//     expect(input?.value).toBe("(16) 98765-4321");
//   });

//   test("deve mascarar o telefone corretamente ao digitar fixo", () => {
//     const { container } = render(<input onKeyUp={mascararTelefone} />);
//     const input = container.querySelector("input");

//     fireEvent.change(input as Element, { target: { value: "1698765432" } });
//     fireEvent.keyUp(input as Element, { key: "1", code: "Digit1" });
//     fireEvent.keyUp(input as Element, { key: "6", code: "Digit6" });
//     fireEvent.keyUp(input as Element, { key: "9", code: "Digit9" });
//     fireEvent.keyUp(input as Element, { key: "8", code: "Digit8" });
//     fireEvent.keyUp(input as Element, { key: "7", code: "Digit7" });
//     fireEvent.keyUp(input as Element, { key: "6", code: "Digit6" });
//     fireEvent.keyUp(input as Element, { key: "5", code: "Digit5" });
//     fireEvent.keyUp(input as Element, { key: "4", code: "Digit4" });
//     fireEvent.keyUp(input as Element, { key: "3", code: "Digit3" });
//     fireEvent.keyUp(input as Element, { key: "2", code: "Digit2" });

//     expect(input?.value).toBe("(16) 9876-5432");
//   });
// });

import { mascararTelefone } from "src/utils/mascararTelefone";

describe("mascararTelefone", () => {
  test("deve mascarar corretamente um número de celular", () => {
    const numeroCelular = "16987654321";
    const resultado = mascararTelefone(numeroCelular);
    expect(resultado).toBe("(16) 98765-4321");
  });

  test("deve mascarar corretamente um número de telefone fixo", () => {
    const numeroFixo = "1698765432";
    const resultado = mascararTelefone(numeroFixo);
    expect(resultado).toBe("(16) 9876-5432");
  });

  test("deve retornar uma string vazia para um valor vazio", () => {
    const resultado = mascararTelefone("");
    expect(resultado).toBe("");
  });

  test("deve lidar com caracteres não numéricos", () => {
    const numeroComCaracteres = "16a98b7654321";
    const resultado = mascararTelefone(numeroComCaracteres);
    expect(resultado).toBe("(16) 98765-4321");
  });
});
