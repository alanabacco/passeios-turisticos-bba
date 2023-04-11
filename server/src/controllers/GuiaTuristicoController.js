const database = require("../models");

class GuiaTuristicoController {
  static async listaGuias(req, res) {
    try {
      const todosOsGuias = await database.guia_turistico.findAll();
      return res.status(200).json(todosOsGuias);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listaGuiaPorId(req, res) {
    const { id } = req.params;
    try {
      const guia = await database.guia_turistico.findOne({ where: { id: Number(id) } });
      return res.status(200).json(guia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaGuia(req, res) {
    const novoGuia = req.body;
    try {
      const guiaCriado = await database.guia_turistico.create(novoGuia);
      return res.status(201).json(guiaCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaGuia(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.guia_turistico.update(atualizacoes, { where: { id: Number(id) } });
      const guiaAtualizado = await database.guia_turistico.findOne({
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
      await database.guia_turistico.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = GuiaTuristicoController;
