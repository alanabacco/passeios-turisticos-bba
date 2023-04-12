const bodyParser = require("body-parser");
const guiaTuristico = require("./guiaTuristicoRoute");
const restaurante = require("./restauranteRoute");
const hospedagem = require("./hospedagemRoute");

module.exports = (app) => {
  app.use(bodyParser.json());

  app.use(guiaTuristico);
  app.use(restaurante);
  app.use(hospedagem);
};
