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
  server = app.listen(3335);
});
afterEach((done) => {
  server.close(done);
});

describe("Rotas de informacoes-uteis", () => {
  test("GET /informacoes-uteis deve retornar status code 200 quando chamada", async () => {
    const response = await request(app).get("/informacoes-uteis");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rotas de informacoes-uteis com autenticação", () => {
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
  test("POST /informacoes-uteis deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/informacoes-uteis")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Informação tal",
        descricao: "descrição",
        endereco: "Rua tal tal, 000",
        telefone: "1632660000",
      });

    respostaId = response.body.id;
    expect(response.statusCode).toBe(201);
  });

  test("POST /informacoes-uteis deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/informacoes-uteis")
      .set("Authorization", `Bearer ${token}`)
      .send({
        descricao: "descrição",
      });

    expect(response.statusCode).toBe(500);
  });

  test("GET /informacoes-uteis/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get(`/informacoes-uteis/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("GET /informacoes-uteis/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get(`/informacoes-uteis/${respostaId}`)
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("GET /informacoes-uteis/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/informacoes-uteis/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("PUT /informacoes-uteis/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put(`/informacoes-uteis/${respostaId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Informação tal" });

    expect(response.statusCode).toBe(200);
  });

  test("PUT /informacoes-uteis/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/informacoes-uteis/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Informação tal" });

    expect(response.statusCode).toBe(404);
  });

  test("DELETE /informacoes-uteis/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete(`/informacoes-uteis/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("DELETE /informacoes-uteis/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/informacoes-uteis/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
