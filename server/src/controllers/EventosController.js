const NaoEncontrado = require("../errors/NaoEncontrado");
const { EventosServices } = require("../services");
const eventosServices = new EventosServices();

class EventosController {
  static async listarEventos(req, res, next) {
    try {
      const todosOsEventos = await eventosServices.listarRegistros();
      return res.status(200).json(todosOsEventos);
    } catch (error) {
      next(error);
    }
  }

  static async criarEventos(req, res, next) {
    const novoEvento = req.body;
    try {
      const eventoCriado = await eventosServices.criarRegistro(novoEvento);
      return res.status(201).json(eventoCriado);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarEventos(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await eventosServices.atualizarRegistro(atualizacoes, id);
      const eventoAtualizado = await eventosServices.listarRegistroPorId(id);

      if (eventoAtualizado !== null) {
        return res.status(200).json(eventoAtualizado);
      } else {
        next(new NaoEncontrado("Id de evento não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirEventos(req, res, next) {
    const { id } = req.params;
    try {
      const eventoPorId = await eventosServices.listarRegistroPorId(id);

      if (eventoPorId !== null) {
        await eventosServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next(new NaoEncontrado("Id de evento não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EventosController;
