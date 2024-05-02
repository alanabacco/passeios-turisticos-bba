const { AuthServices, UsuariosServices } = require("../services");
const NaoEncontrado = require("../errors/NaoEncontrado");

const authServices = new AuthServices();
const usuariosServices = new UsuariosServices();

class AuthController {
  static async login(req, res, next) {
    const { nome, senha } = req.body;

    const nomeUsuarioDigitado = nome;
    const senhaDigitada = senha;

    try {
      const usuarioBD = await usuariosServices.listarRegistroPorNomeUsuario(
        nomeUsuarioDigitado
      );

      if (usuarioBD !== null) {
        const login = await authServices.login({ senhaDigitada, usuarioBD });

        res.status(200).json(login);
      } else {
        next(new NaoEncontrado("Nome de usuário não encontrado."));
      }
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }

  // static async logout(req, res, next) {
  //   res.status(200).send({ auth: false, token: null });
  // }

  static async getSession(req, res, next) {
    const nome = req.nome;

    try {
      if (nome) {
        res.status(200).json({
          dados: {
            session: {
              usuario: {
                nome: nome,
              },
            },
          },
        });
      }
    } catch (error) {
      res.status(401).json({ status: 401, message: "Token de acesso inválido." });
    }
  }
}

module.exports = AuthController;
