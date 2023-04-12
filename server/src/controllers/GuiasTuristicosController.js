const database = require("../models");

class GuiasTuristicosController {
  static async listaGuias(req, res) {
    try {
      const todosOsGuias = await database.guias_turisticos.findAll();
      return res.status(200).json(todosOsGuias);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listaGuiaPorId(req, res) {
    const { id } = req.params;
    try {
      const guia = await database.guias_turisticos.findOne({ where: { id: Number(id) } });
      return res.status(200).json(guia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaGuia(req, res) {
    const novoGuia = req.body;
    try {
      const guiaCriado = await database.guias_turisticos.create(novoGuia);
      return res.status(201).json(guiaCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaGuia(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.guias_turisticos.update(atualizacoes, { where: { id: Number(id) } });
      const guiaAtualizado = await database.guias_turisticos.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(guiaAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluiGuia(req, res) {
    const { id } = req.params;
    try {
      await database.guias_turisticos.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = GuiasTuristicosController;
