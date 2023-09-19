const { describe, test, expect, beforeEach, afterEach } = require("@jest/globals");
const request = require("supertest");
const app = require("../../src/app");

let server;
beforeEach(() => {
  server = app.listen(3000);
});
afterEach((done) => {
  server.close(done);
});

describe("Rotas de auth", () => {
  test("POST /auth/login deve retornar status code 200 quando dados estiverem corretos", async () => {
    const usuario = {
      nome: "usuario",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    expect(response.status).toBe(200);
  });

  test("POST /auth/login deve retornar status code 404 quando não tiver usuario no bd", async () => {
    const usuario = {
      nome: "USUARIO",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    expect(response.status).toBe(404);
  });

  test("POST /auth/login deve retornar mensagem 'Nome de usuário não encontrado.' quando não tiver usuario no bd", async () => {
    const usuario = {
      nome: "USUARIO",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    expect(response.body.mensagem).toEqual("Nome de usuário não encontrado.");
  });

  test("POST /auth/login deve retornar status code 401 quando a senha estiver errada", async () => {
    const usuario = {
      nome: "usuario",
      senha: "a0a0a0a0",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    expect(response.status).toBe(401);
  });
});
