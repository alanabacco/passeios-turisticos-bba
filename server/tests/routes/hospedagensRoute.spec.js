const { describe, test, expect, beforeAll } = require("@jest/globals");
const request = require("supertest");
const app = require("../../src/app");

describe("Rotas de hospedagens", () => {
  test("get /hospedagens deve retornar status code 200 quando chamada", async () => {
    const response = await request(app).get("/hospedagens");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rotas de hospedagens com autenticação", () => {
  let token;
  beforeAll(async () => {
    const usuario = {
      nome: "usuario",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    token = response.body.accessToken;
  });

  test("get /hospedagens/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get("/hospedagens/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("get /hospedagens/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get("/hospedagens/1")
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("get /hospedagens/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/hospedagens/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("put /hospedagens/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put("/hospedagens/1")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Hospedagem tal" });

    expect(response.statusCode).toBe(200);
  });

  test("put /hospedagens/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/hospedagens/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Hospedagem tal" });

    expect(response.statusCode).toBe(404);
  });

  test("delete /hospedagens/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete("/hospedagens/2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("delete /hospedagens/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/hospedagens/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
