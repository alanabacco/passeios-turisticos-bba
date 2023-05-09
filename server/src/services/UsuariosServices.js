const Services = require("./Services");
const database = require("../models");

class UsuariosServices extends Services {
  constructor() {
    super("usuarios");
  }

  async listarRegistroPorId(id) {
    return database[this.nomeModelo].findOne({ where: { id: id } });
  }

  async listarRegistroPorNomeUsuario(nomeUsuario) {
    const usuario = database[this.nomeModelo].findOne({
      attributes: ["id", "nome", "senha"],
      where: {
        nome: nomeUsuario,
      },
    });

    return usuario;
  }

  async atualizarRegistro(dadosAtualizados, id) {
    return database[this.nomeModelo].update(dadosAtualizados, {
      where: { id: id },
    });
  }

  async excluirRegistro(id) {
    return database[this.nomeModelo].destroy({ where: { id: id } });
  }

  // soft delete
  async restaurarRegistro(id) {
    return database[this.nomeModelo].restore({ where: { id: id } });
  }
}

module.exports = UsuariosServices;
