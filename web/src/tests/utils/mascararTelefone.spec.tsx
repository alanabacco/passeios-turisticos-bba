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
