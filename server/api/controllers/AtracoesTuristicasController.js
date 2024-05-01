const NaoEncontrado = require("../errors/NaoEncontrado");
const { AtracoesTuristicasServices } = require("../services");
const atracoesTuristicasServices = new AtracoesTuristicasServices();

class AtracoesTuristicasController {
  static async listarAtracoesTuristicas(req, res, next) {
    try {
      const todasAsAtracoes = await atracoesTuristicasServices.listarRegistros();
      // ordem alfabetica por nome
      todasAsAtracoes.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });
      return res.status(200).json(todasAsAtracoes);
    } catch (error) {
      next(error);
    }
  }

  static async listarAtracoesTuristicasPorId(req, res, next) {
    const { id } = req.params;
    try {
      const atracaoTuristica = await atracoesTuristicasServices.listarRegistroPorId(id);
      if (atracaoTuristica !== null) {
        return res.status(200).json(atracaoTuristica);
      } else {
        next(new NaoEncontrado("Id de atração turística não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarAtracaoTuristica(req, res, next) {
    const novaAtracaoTuristica = req.body;
    try {
      const atracaoTuristicaCriada = await atracoesTuristicasServices.criarRegistro(
        novaAtracaoTuristica
      );
      return res.status(201).json(atracaoTuristicaCriada);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAtracaoTuristica(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await atracoesTuristicasServices.atualizarRegistro(atualizacoes, id);
      const atracaoTuristicaAtualizada =
        await atracoesTuristicasServices.listarRegistroPorId(id);

      if (atracaoTuristicaAtualizada !== null) {
        return res.status(200).json(atracaoTuristicaAtualizada);
      } else {
        next(new NaoEncontrado("Id de atração turística não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirAtracaoTuristica(req, res, next) {
    const { id } = req.params;
    try {
      const atracaoTuristicaPorId = await atracoesTuristicasServices.listarRegistroPorId(
        id
      );

      if (atracaoTuristicaPorId !== null) {
        await atracoesTuristicasServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next(new NaoEncontrado("Id de atração turística não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AtracoesTuristicasController;
