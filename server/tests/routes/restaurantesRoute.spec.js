const { describe, test, expect, beforeAll } = require("@jest/globals");
const request = require("supertest");
const app = require("../../src/app");

describe("Rotas de restaurantes", () => {
  test("get /restaurantes deve retornar status code 200", async () => {
    const response = await request(app).get("/restaurantes");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rotas de restaurantes com autenticação", () => {
  let token;
  beforeAll(async () => {
    const usuario = {
      nome: "usuario",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    token = response.body.accessToken;
  });

  test("get /restaurantes/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .get("/restaurantes/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("get /restaurantes/:id deve retornar status code 404", async () => {
    const response = await request(app)
      .get("/restaurantes/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("put /restaurantes/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .get("/restaurantes/1")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Restaurante tal" });

    expect(response.statusCode).toBe(200);
  });

  test("put /restaurantes/:id deve retornar status code 404", async () => {
    const response = await request(app)
      .put("/restaurantes/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Restaurante tal" });

    expect(response.statusCode).toBe(404);
  });
});
