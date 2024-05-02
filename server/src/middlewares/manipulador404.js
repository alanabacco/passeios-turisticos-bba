const NaoEncontrado = require("../errors/NaoEncontrado");

const manipulador404 = (req, res, next) => {
  const erro404 = new NaoEncontrado();

  next(erro404);
};

module.exports = manipulador404;
