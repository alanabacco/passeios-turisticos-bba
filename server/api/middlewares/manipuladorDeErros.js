const { ValidationError } = require("sequelize");
const ErroBase = require("../errors/ErroBase.js");
const ErroDeValidacao = require("../errors/ErroDeValidacao.js");
const NaoEncontrado = require("../errors/NaoEncontrado.js");

const manipuladorDeErros = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    new ErroDeValidacao(error).enviarResposta(res);
  } else if (error instanceof NaoEncontrado) {
    error.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
};

module.exports = manipuladorDeErros;
