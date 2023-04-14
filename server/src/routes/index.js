const bodyParser = require("body-parser");
const guiasTuristicos = require("./guiasTuristicosRoute");
const restaurantes = require("./restaurantesRoute");
const hospedagens = require("./hospedagensRoute");
const informacoesUteis = require("./informacoesUteisRoute");
const atracoesTuristicas = require("./atracoesTuristicasRoute");
const usuarios = require("./usuariosRoute");
const eventos = require("./eventosRoute");
const atracoesGuias = require("./atracoesGuiasRoute");

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    guiasTuristicos,
    restaurantes,
    hospedagens,
    informacoesUteis,
    atracoesTuristicas,
    usuarios,
    eventos,
    atracoesGuias
  );
};