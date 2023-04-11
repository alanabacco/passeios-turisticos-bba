const bodyParser = require("body-parser");
const guiasTuristicos = require("./guiaTuristicoRoute");

module.exports = (app) => {
  app.use(bodyParser.json());

  app.use(guiasTuristicos);
};
