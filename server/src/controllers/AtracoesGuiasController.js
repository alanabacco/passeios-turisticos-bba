const { AtracoesGuiasServices } = require("../services");
const atracoesGuiasServices = new AtracoesGuiasServices();

class AtracoesGuiasController {
  static async listarAtracoesEGuias(req, res) {
    try {
      const todos = await atracoesGuiasServices.listarRegistros();
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarAtracaoEGuia(req, res) {
    const novaAtracaoEGuia = req.body;
    try {
      const atracaoEGuiaCriado = await atracoesGuiasServices.criarRegistro(
        novaAtracaoEGuia
      );
      return res.status(201).json(atracaoEGuiaCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarAtracaoEGuia(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await atracoesGuiasServices.atualizarRegistro(atualizacoes, id);
      const atraacaoEGuiaAtualizado = await atracoesGuiasServices.listarRegistroPorId(id);
      return res.status(200).json(atraacaoEGuiaAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirAtracaoEGuia(req, res) {
    const { id } = req.params;
    try {
      await atracoesGuiasServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AtracoesGuiasController;
