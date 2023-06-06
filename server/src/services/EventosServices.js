const Services = require("./Services");
const database = require("../models");
const { Op } = require("sequelize");

const dataAtual = new Date();

class EventosServices extends Services {
  constructor() {
    super("eventos");
  }

  // métodos específicos desse controller
  async listarRegistrosComDataDeFimIgualOuMaiorQueDataAtual() {
    return database[this.nomeModelo].findAll({
      where: { data_fim: { [Op.gte]: dataAtual } },
    });
  }
}

module.exports = EventosServices;
