const {
  describe,
  test,
  expect,
  beforeAll,
  afterEach,
  beforeEach,
} = require("@jest/globals");
const request = require("supertest");
const app = require("../../src/app");

let server;
beforeEach(() => {
  server = app.listen(3333);
});
afterEach((done) => {
  server.close(done);
});

describe("Rotas de eventos", () => {
  test("get /eventos deve retornar status code 200 quando chamada", async () => {
    const response = await request(app).get("/eventos");
    expect(response.statusCode).toBe(200);
  });

  test("get /eventos-futuros deve retornar status code 200 quando chamada", async () => {
    const response = await request(app).get("/eventos-futuros");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rotas de eventos com autenticação", () => {
  let token;
  beforeAll(async () => {
    const usuario = {
      nome: "usuario",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    token = response.body.accessToken;
  });

  test("get /eventos/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get("/eventos/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("get /eventos/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get("/eventos/1")
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("get /eventos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/eventos/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("put /eventos/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put("/eventos/1")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Evento tal" });

    expect(response.statusCode).toBe(200);
  });

  test("put /eventos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/eventos/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Evento tal" });

    expect(response.statusCode).toBe(404);
  });

  test("delete /eventos/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete("/eventos/2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("delete /eventos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/eventos/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
