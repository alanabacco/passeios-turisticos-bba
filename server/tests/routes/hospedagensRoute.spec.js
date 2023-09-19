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
  server = app.listen(3334);
});
afterEach((done) => {
  server.close(done);
});

describe("Rotas de hospedagens", () => {
  test("GET /hospedagens deve retornar status code 200 quando chamada", async () => {
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

  let respostaId;
  test("POST /hospedagens deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/hospedagens")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Hospedagem 5 estrelas",
        telefone: "1632660000",
        descricao: "",
        endereco: "Rua tal, 000",
      });

    respostaId = response.body.id;
    expect(response.statusCode).toBe(201);
  });

  test("POST /hospedagens deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/hospedagens")
      .set("Authorization", `Bearer ${token}`)
      .send({
        telefone: "1632661111",
      });

    expect(response.statusCode).toBe(500);
  });

  test("GET /hospedagens/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get(`/hospedagens/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("GET /hospedagens/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get(`/hospedagens/${respostaId}`)
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("GET /hospedagens/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/hospedagens/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("PUT /hospedagens/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put(`/hospedagens/${respostaId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Hospedagem tal" });

    expect(response.statusCode).toBe(200);
  });

  test("PUT /hospedagens/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/hospedagens/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Hospedagem tal" });

    expect(response.statusCode).toBe(404);
  });

  test("DELETE /hospedagens/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete(`/hospedagens/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("DELETE /hospedagens/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/hospedagens/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
