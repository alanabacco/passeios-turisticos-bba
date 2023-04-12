const bodyParser = require("body-parser");
const guiasTuristicos = require("./guiasTuristicosRoute");
const restaurantes = require("./restaurantesRoute");
const hospedagens = require("./hospedagensRoute");
const informacoesUteis = require("./informacoesUteisRoute");
const atracoesTuristicas = require("./atracoesTuristicasRoute");
const usuarios = require("./usuariosRoute");

module.exports = (app) => {
  app.use(bodyParser.json());

  app.use(guiasTuristicos);
  app.use(restaurantes);
  app.use(hospedagens);
  app.use(informacoesUteis);
  app.use(atracoesTuristicas);
  app.use(usuarios);
};
