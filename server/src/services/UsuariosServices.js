const Services = require("./Services");
const database = require("../models");

class UsuariosServices extends Services {
  constructor() {
    super("usuarios");
  }

  async restaurarRegistro(id) {
    return database[this.nomeModelo].restore({ where: { id: Number(id) } });
  }
}

module.exports = UsuariosServices;
