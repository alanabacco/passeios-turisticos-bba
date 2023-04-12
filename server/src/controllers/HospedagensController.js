const database = require("../models");

class HospedagensController {
  static async listarHospedagens(req, res) {
    try {
      const todasAsHospedagens = await database.hospedagens.findAll();
      return res.status(200).json(todasAsHospedagens);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarHospedagem(req, res) {
    const novaHospedagem = req.body;
    try {
      const hospedagemCriada = await database.hospedagens.create(novaHospedagem);
      return res.status(201).json(hospedagemCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarHospedagem(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.hospedagens.update(atualizacoes, { where: { id: Number(id) } });
      const hospedagemAtualizada = await database.hospedagens.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(hospedagemAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirHospedagem(req, res) {
    const { id } = req.params;
    try {
      await database.hospedagens.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = HospedagensController;
