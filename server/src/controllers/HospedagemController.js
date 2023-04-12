const database = require("../models");

class HospedagemController {
  static async listaHospedagens(req, res) {
    try {
      const todasAsHospedagens = await database.hospedagem.findAll();
      return res.status(200).json(todasAsHospedagens);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaHospedagem(req, res) {
    const novaHospedagem = req.body;
    try {
      const hospedagemCriada = await database.hospedagem.create(novaHospedagem);
      return res.status(201).json(hospedagemCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaHospedagem(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.hospedagem.update(atualizacoes, { where: { id: Number(id) } });
      const hospedagemAtualizada = await database.hospedagem.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(hospedagemAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluiHospedagem(req, res) {
    const { id } = req.params;
    try {
      await database.hospedagem.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = HospedagemController;
