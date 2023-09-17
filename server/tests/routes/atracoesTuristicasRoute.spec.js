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
  test("get /atracoes-turisticas deve retornar status code 200 quando chamada", async () => {
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

  test("get /atracoes-turisticas/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get("/atracoes-turisticas/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("get /atracoes-turisticas/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get("/atracoes-turisticas/1")
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("get /atracoes-turisticas/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get("/atracoes-turisticas/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("post /atracoes-turisticas deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/atracoes-turisticas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Guia tal",
        telefone: "1632660000",
        endereco: "Rua tal tal, 000",
      });

    expect(response.statusCode).toBe(201);
  });

  test("post /atracoes-turisticas deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/atracoes-turisticas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        telefone: "1632660000",
      });

    expect(response.statusCode).toBe(500);
  });

  test("put /atracoes-turisticas/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put("/atracoes-turisticas/1")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Atração tal" });

    expect(response.statusCode).toBe(200);
  });

  test("put /atracoes-turisticas/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put("/atracoes-turisticas/100")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Atração tal" });

    expect(response.statusCode).toBe(404);
  });

  test("delete /atracoes-turisticas/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete("/atracoes-turisticas/2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("delete /atracoes-turisticas/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete("/atracoes-turisticas/100")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
