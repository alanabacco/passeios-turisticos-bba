const Services = require("./Services");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const process = require("process");

class AuthServices extends Services {
  constructor() {
    super("");
  }

  // métodos específicos desse controller

  async login({ senhaDigitada, usuarioBD }) {
    const senha = senhaDigitada.toString();
    const hash = usuarioBD.senha.toString();

    const senhasIguais = await compare(senha, hash);

    if (!senhasIguais) {
      throw new Error("Usuário ou senha inválido.");
    }

    const secret = `${process.env.HASH_SECRET}`;
    const tresHoras = (60 * 60 * 24) / 8;

    const accessToken = sign(
      {
        id: usuarioBD.id,
        nome: usuarioBD.nome,
      },
      secret,
      {
        expiresIn: tresHoras,
      }
    );

    return { accessToken };
  }
}

module.exports = AuthServices;
