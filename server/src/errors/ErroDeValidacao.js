const ErroBase = require("./ErroBase.js");

class ErroDeValidacao extends ErroBase {
  constructor(error) {
    const erroMensagens = error.message
      .split(",\n")
      .map((msg) => msg)
      .join(" ");
    super(erroMensagens, 400);
  }
}

module.exports = ErroDeValidacao;
