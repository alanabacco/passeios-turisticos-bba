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

  const novoUsuarioNome = "usuarioTeste";
  const usuarioIdErrado = "3a333333-a333-3333-333a-33aa33a3aaaa";

  let respostaId;
  test("POST /usuarios deve retornar status code 201", async () => {
    const response = await request(app)
      .post("/usuarios")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: `${novoUsuarioNome}`,
        senha: "teste123",
      });

    respostaId = response.body.id;
    expect(response.statusCode).toBe(201);
  });

  test("POST /usuarios deve retornar status code 400 quando não enviar nome", async () => {
    const response = await request(app)
      .post("/usuarios")
      .set("Authorization", `Bearer ${token}`)
      .send({
        senha: "teste123",
      });

    expect(response.statusCode).toBe(400);
  });

  test("POST /usuarios deve retornar status code 400 quando não enviar senha", async () => {
    const response = await request(app)
      .post("/usuarios")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "outroUsuario",
      });

    expect(response.statusCode).toBe(400);
  });

  test("GET /usuarios deve retornar status code 200 quando chamada", async () => {
    const response = await request(app)
      .get("/usuarios")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test("GET /usuarios deve retornar status code 401 quando não tiver autenticação", async () => {
    const response = await request(app).get("/usuarios");
    expect(response.statusCode).toBe(401);
  });

  test("GET /usuarios/usuario/:nome deve retornar status code 200 quando for chamada com autenticação correta", async () => {
    const response = await request(app)
      .get(`/usuarios/usuario/${novoUsuarioNome}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("GET /usuarios/usuario/:nome deve retornar status code 401 quando for chamada com autenticação incorreta", async () => {
    const response = await request(app)
      .get(`/usuarios/usuario/${novoUsuarioNome}`)
      .set("Authorization", "Bearer 123456");

    expect(response.statusCode).toBe(401);
  });

  test("GET /usuarios/usuario/:nome deve retornar status code 404 quando buscado por um nome de usuario que não esta no bd", async () => {
    const response = await request(app)
      .get("/usuarios/usuario/usuarioErrado")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });

  test("GET /usuarios/:id deve retornar status code 200 quando for chamada corretamente", async () => {
    const response = await request(app)
      .get(`/usuarios/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("PUT /usuarios/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .put(`/usuarios/${respostaId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "mudandoUsuario" });

    expect(response.statusCode).toBe(200);
  });

  test("PUT /usuarios/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .put(`/usuarios/${usuarioIdErrado}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "mudandoUsuario" });

    expect(response.statusCode).toBe(404);
  });

  test("DELETE /usuarios/:id deve retornar status code 200", async () => {
    const response = await request(app)
      .delete(`/usuarios/${respostaId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("DELETE /usuarios/:id deve retornar status code 404 quando buscado por um id que não esta no bd", async () => {
    const response = await request(app)
      .delete(`/usuarios/${usuarioIdErrado}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(404);
  });
});
