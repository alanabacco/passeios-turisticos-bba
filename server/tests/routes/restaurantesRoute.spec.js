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
  server = app.listen(3336);
});
afterEach((done) => {
  server.close(done);
});

describe("Rotas de restaurantes", () => {
  test("GET /restaurantes deve retornar status code 200 quando chamada", async () => {
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

  let respostaId;
  test("POST /restaurantes deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/restaurantes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Restaurante legal",
        descricao: "descrição",
        endereco: "Rua tal tal, 000",
        telefone: "1632660000",
      });

    respostaId = response.body.id;
    expect(response.statusCode).toBe(201);
  });

  test("POST /restaurantes deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/restaurantes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        descricao: "descrição",
      });

    expect(response.statusCode).toBe(500);
  });

  test("GET /restaurantes/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get(`/restaurantes/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("GET /restaurantes/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get(`/restaurantes/${respostaId}`)
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("GET /restaurantes/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/restaurantes/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("PUT /restaurantes/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put(`/restaurantes/${respostaId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Restaurante tal" });

    expect(response.statusCode).toBe(200);
  });

  test("PUT /restaurantes/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/restaurantes/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Restaurante tal" });

    expect(response.statusCode).toBe(404);
  });

  test("DELETE /restaurantes/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete(`/restaurantes/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("DELETE /restaurantes/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/restaurantes/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
