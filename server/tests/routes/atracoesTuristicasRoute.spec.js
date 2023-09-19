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
  server = app.listen(3339);
});
afterEach((done) => {
  server.close(done);
});

describe("Rotas de atracoes-turisticas", () => {
  test("GET /atracoes-turisticas deve retornar status code 200 quando chamada", async () => {
    const response = await request(app).get("/atracoes-turisticas");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rotas de atracoes-turisticas com autenticação", () => {
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
  test("POST /atracoes-turisticas deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/atracoes-turisticas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Atração Turística legal",
        telefone: "1632660000",
        endereco: "Rua tal tal, 000",
      });

    respostaId = response.body.id;
    expect(response.statusCode).toBe(201);
  });

  test("POST /atracoes-turisticas deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/atracoes-turisticas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        telefone: "1632660000",
      });

    expect(response.statusCode).toBe(500);
  });

  test("GET /atracoes-turisticas/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get(`/atracoes-turisticas/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("GET /atracoes-turisticas/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get(`/atracoes-turisticas/${respostaId}`)
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("GET /atracoes-turisticas/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/atracoes-turisticas/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("PUT /atracoes-turisticas/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put(`/atracoes-turisticas/${respostaId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Atração legal" });

    expect(response.statusCode).toBe(200);
  });

  test("PUT /atracoes-turisticas/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/atracoes-turisticas/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Atração tal" });

    expect(response.statusCode).toBe(404);
  });

  test("DELETE /atracoes-turisticas/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete(`/atracoes-turisticas/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("DELETE /atracoes-turisticas/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/atracoes-turisticas/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
