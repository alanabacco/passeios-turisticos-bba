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
  test("GET /eventos deve retornar status code 200 quando chamada", async () => {
    const response = await request(app).get("/eventos");
    expect(response.statusCode).toBe(200);
  });

  test("GET /eventos-futuros deve retornar status code 200 quando chamada", async () => {
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

  let respostaId;
  test("POST /eventos deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/eventos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Feira Livre",
        descricao: "",
        endereco: "Rua tal tal, 000",
        data_inicio: "2023-09-18",
        data_fim: "2023-09-20",
      });

    respostaId = response.body.id;
    expect(response.statusCode).toBe(201);
  });

  test("POST /eventos deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/eventos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        descricao: "descricao",
      });

    expect(response.statusCode).toBe(500);
  });

  test("POST /eventos deve retornar status code 500 quando não estiver enviando data_inicio", async () => {
    const response = await request(app)
      .post("/eventos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "nome",
        descricao: "descricao",
      });

    expect(response.statusCode).toBe(500);
  });

  test("POST /eventos deve retornar status code 500 quando não estiver enviando data_fim", async () => {
    const response = await request(app)
      .post("/eventos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "nome",
        descricao: "descricao",
        data_inicio: "2023-09-18",
      });

    expect(response.statusCode).toBe(500);
  });

  test("GET /eventos/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get(`/eventos/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("GET /eventos/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get(`/eventos/${respostaId}`)
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("GET /eventos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/eventos/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("PUT /eventos/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put(`/eventos/${respostaId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Evento tal" });

    expect(response.statusCode).toBe(200);
  });

  test("PUT /eventos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/eventos/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Evento tal" });

    expect(response.statusCode).toBe(404);
  });

  test("DELETE /eventos/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete(`/eventos/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("DELETE /eventos/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/eventos/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
