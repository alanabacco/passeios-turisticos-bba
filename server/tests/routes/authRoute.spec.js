const { describe, test, expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../../src/app");

describe("Rotas de auth", () => {
  test("post /auth/login deve retornar status code 200", async () => {
    const usuario = {
      nome: "usuario",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    expect(response.status).toBe(200);
  });

  test("post /auth/login deve retornar status code 404", async () => {
    const usuario = {
      nome: "USUARIO",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    expect(response.status).toBe(404);
  });

  test("post /auth/login deve retornar status code 401", async () => {
    const usuario = {
      nome: "usuario",
      senha: "a0a0a0a0",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    expect(response.status).toBe(401);
  });
});
