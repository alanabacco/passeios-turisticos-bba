const database = require("../models");

class EventosController {
  static async listarEventos(req, res) {
    try {
      const todosOsEventos = await database.eventos.findAll();
      return res.status(200).json(todosOsEventos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarEventos(req, res) {
    const novoEvento = req.body;
    try {
      const eventoCriado = await database.eventos.create(novoEvento);
      return res.status(201).json(eventoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarEventos(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.eventos.update(atualizacoes, { where: { id: Number(id) } });
      const eventoAtualizado = await database.eventos.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(eventoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirEventos(req, res) {
    const { id } = req.params;
    try {
      await database.eventos.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = EventosController;
