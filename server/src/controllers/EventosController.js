const NaoEncontrado = require("../errors/NaoEncontrado");
const { EventosServices } = require("../services");
const eventosServices = new EventosServices();

class EventosController {
  static async listarEventos(req, res, next) {
    try {
      const todosOsEventos = await eventosServices.listarRegistros();
      const eventosOrdenados = ordenarEventosPorData(todosOsEventos);
      return res.status(200).json(eventosOrdenados.reverse());
    } catch (error) {
      next(error);
    }
  }

  static async listarEventosFuturos(req, res, next) {
    try {
      const todosOsEventos =
        await eventosServices.listarRegistrosComDataDeFimIgualOuMaiorQueDataAtual();

      const eventosOrdenados = ordenarEventosPorData(todosOsEventos);
      return res.status(200).json(eventosOrdenados);
    } catch (error) {
      next(error);
    }
  }

  static async listarEventoPorId(req, res, next) {
    const { id } = req.params;
    try {
      const evento = await eventosServices.listarRegistroPorId(id);
      if (evento !== null) {
        return res.status(200).json(evento);
      } else {
        next(new NaoEncontrado("Id de evento não encontrado."));
      }
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

function ordenarEventosPorData(eventos) {
  // referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#:~:text=items.sort(function%20(a%2C%20b)%20%7B%0A%20%20if%20(a.name%20%3E%20b.name)%20%7B%0A%20%20%20%20return%201%3B%0A%20%20%7D%0A%20%20if%20(a.name%20%3C%20b.name)%20%7B%0A%20%20%20%20return%20%2D1%3B%0A%20%20%7D%0A%20%20//%20a%20must%20be%20equal%20to%20b%0A%20%20return%200%3B%0A%7D)%3B
  const eventosOrdenados = eventos.sort(function (a, b) {
    if (a.data_inicio > b.data_inicio) {
      return 1;
    }
    if (a.data_inicio < b.data_inicio) {
      return -1;
    }
    return 0;
  });

  return eventosOrdenados;
}
