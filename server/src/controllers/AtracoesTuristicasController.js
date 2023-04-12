const database = require("../models");

class AtracoesTuristicasController {
  static async listarAtracoesTuristicas(req, res) {
    try {
      const todasAsAtracoes = await database.atracoes_turisticas.findAll();
      return res.status(200).json(todasAsAtracoes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarAtracaoTuristica(req, res) {
    const novaAtracaoTuristica = req.body;
    try {
      const atracaoTuristicaCriada = await database.atracoes_turisticas.create(
        novaAtracaoTuristica
      );
      return res.status(201).json(atracaoTuristicaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarAtracaoTuristica(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.atracoes_turisticas.update(atualizacoes, {
        where: { id: Number(id) },
      });
      const atracaoTuristicaAtualizada = await database.atracoes_turisticas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(atracaoTuristicaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirAtracaoTuristica(req, res) {
    const { id } = req.params;
    try {
      await database.atracoes_turisticas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AtracoesTuristicasController;
