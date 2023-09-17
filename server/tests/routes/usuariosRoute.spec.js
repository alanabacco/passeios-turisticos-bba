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

describe("Rotas de usuarios com autenticação", () => {
  let server;
  beforeEach(() => {
    server = app.listen(3337);
  });
  afterEach((done) => {
    server.close(done);
  });

  let token;
  beforeAll(async () => {
    const usuario = {
      nome: "usuario",
      senha: "123456",
    };
    const response = await request(app).post("/auth/login").send(usuario);
    token = response.body.accessToken;
  });

  const usuarioBdId = "8c444964-e172-4066-884a-73ed95a2ffcb";
  const novoUsuarioId = "8c666965-e172-4066-884a-73ed95a2ggcb";
  const usuarioIdErrado = "3a333333-a333-3333-333a-33aa33a3aaaa";

  test("get /usuarios deve retornar status code 200 quando chamada", async () => {
    const response = await request(app)
      .get("/usuarios")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test("get /usuarios deve retornar status code 401 quando não tiver autenticação", async () => {
    const response = await request(app).get("/usuarios");
    expect(response.statusCode).toBe(401);
  });

  test("get /usuarios/:id deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get(`/usuarios/${usuarioBdId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("get /usuarios/:id deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get(`/usuarios/${usuarioBdId}`)
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("get /usuarios/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .get(`/usuarios/${usuarioIdErrado}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("post /usuarios deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/usuarios")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id: `${novoUsuarioId}`,
        nome: "usuarioTeste",
        senha: "teste123",
      });

    expect(response.statusCode).toBe(201);
  });

  test("post /usuarios deve retornar status code 500 quando não estiver enviando nome", async () => {
    const response = await request(app)
      .post("/usuarios")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id: `${novoUsuarioId}`,
        senha: "teste123",
      });

    expect(response.statusCode).toBe(500);
  });

  test("put /usuarios/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put(`/usuarios/${usuarioBdId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "mudandoUsuario" });

    expect(response.statusCode).toBe(200);
  });

  test("put /usuarios/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put(`/usuarios/${usuarioIdErrado}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "mudandoUsuario" });

    expect(response.statusCode).toBe(404);
  });

  test("delete /usuarios/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete(`/usuarios/${usuarioBdId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });
});
