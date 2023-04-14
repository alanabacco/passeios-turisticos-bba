const NaoEncontrado = require("../errors/NaoEncontrado");
const { AtracoesGuiasServices } = require("../services");
const atracoesGuiasServices = new AtracoesGuiasServices();

class AtracoesGuiasController {
  static async listarAtracoesEGuias(req, res, next) {
    try {
      const todos = await atracoesGuiasServices.listarRegistros();
      return res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async criarAtracaoEGuia(req, res, next) {
    const novaAtracaoEGuia = req.body;
    try {
      const atracaoEGuiaCriado = await atracoesGuiasServices.criarRegistro(
        novaAtracaoEGuia
      );
      return res.status(201).json(atracaoEGuiaCriado);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAtracaoEGuia(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await atracoesGuiasServices.atualizarRegistro(atualizacoes, id);
      const atracaoEGuiaAtualizado = await atracoesGuiasServices.listarRegistroPorId(id);
      if (atracaoEGuiaAtualizado !== null) {
        res.status(200).json(atracaoEGuiaAtualizado);
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirAtracaoEGuia(req, res, next) {
    const { id } = req.params;
    try {
      const atracaoGuiaPorId = await atracoesGuiasServices.listarRegistroPorId(id);

      if (atracaoGuiaPorId !== null) {
        await atracoesGuiasServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AtracoesGuiasController;
