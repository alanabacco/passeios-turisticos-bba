const database = require("../models");

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async listarRegistros() {
    return database[this.nomeModelo].findAll();
  }

  async listarRegistroPorId(id) {
    return database[this.nomeModelo].findOne({ where: { id: Number(id) } });
  }

  async criarRegistro(dados) {
    return database[this.nomeModelo].create(dados);
  }

  async atualizarRegistro(dadosAtualizados, id) {
    return database[this.nomeModelo].update(dadosAtualizados, {
      where: { id: Number(id) },
    });
  }

  async excluirRegistro(id) {
    return database[this.nomeModelo].destroy({ where: { id: Number(id) } });
  }
}

module.exports = Services;
