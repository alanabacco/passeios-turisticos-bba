const { EventosServices } = require("../services");
const eventosServices = new EventosServices();

class EventosController {
  static async listarEventos(req, res) {
    try {
      const todosOsEventos = await eventosServices.listarRegistros();
      return res.status(200).json(todosOsEventos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarEventos(req, res) {
    const novoEvento = req.body;
    try {
      const eventoCriado = await eventosServices.criarRegistro(novoEvento);
      return res.status(201).json(eventoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarEventos(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await eventosServices.atualizarRegistro(atualizacoes, id);
      const eventoAtualizado = await eventosServices.listarRegistroPorId(id);
      return res.status(200).json(eventoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirEventos(req, res) {
    const { id } = req.params;
    try {
      await eventosServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = EventosController;
