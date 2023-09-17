const {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} = require("@jest/globals");
const request = require("supertest");
const app = require("../../src/app");

let server;
beforeEach(() => {
  server = app.listen(3338);
});
afterEach((done) => {
  server.close(done);
});

describe("Rotas de guias-turisticos", () => {
  test("get /guias-turisticos deve retornar status code 200 quando chamada", async () => {
    const response = await request(app).get("/guias-turisticos");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rotas de guias-turisticos com autenticação", () => {
  let token;
  beforeAll(async () => {
    const usuario = {
      nome: "usuario",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    token = response.body.accessToken;
  });

  test("get /guias-turisticos/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get("/guias-turisticos/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("get /guias-turisticos/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get("/guias-turisticos/1")
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("get /guias-turisticos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/guias-turisticos/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("post /guias-turisticos deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/guias-turisticos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Guia tal",
        telefone: "1632660000",
        tipos_turismo: "Trilha",
      });

    expect(response.statusCode).toBe(201);
  });

  test("post /guias-turisticos deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/guias-turisticos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        tipos_turismo: "Trilha",
      });

    expect(response.statusCode).toBe(500);
  });

  test("put /guias-turisticos/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put("/guias-turisticos/1")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Guia tal" });

    expect(response.statusCode).toBe(200);
  });

  test("put /guias-turisticos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/guias-turisticos/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Guia tal" });

    expect(response.statusCode).toBe(404);
  });

  test("delete /guias-turisticos/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete("/guias-turisticos/2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("delete /guias-turisticos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/guias-turisticos/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
