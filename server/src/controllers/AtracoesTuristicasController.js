const { AtracoesTuristicasServices } = require("../services");
const atracoesTuristicasServices = new AtracoesTuristicasServices();

class AtracoesTuristicasController {
  static async listarAtracoesTuristicas(req, res) {
    try {
      const todasAsAtracoes = await atracoesTuristicasServices.listarRegistros();
      return res.status(200).json(todasAsAtracoes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarAtracaoTuristica(req, res) {
    const novaAtracaoTuristica = req.body;
    try {
      const atracaoTuristicaCriada = await atracoesTuristicasServices.criarRegistro(
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
      await atracoesTuristicasServices.atualizarRegistro(atualizacoes, id);
      const atracaoTuristicaAtualizada =
        await atracoesTuristicasServices.listarRegistroPorId(id);
      return res.status(200).json(atracaoTuristicaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirAtracaoTuristica(req, res) {
    const { id } = req.params;
    try {
      await atracoesTuristicasServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AtracoesTuristicasController;
