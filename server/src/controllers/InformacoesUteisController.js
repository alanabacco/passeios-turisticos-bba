const { InformacoesUteisServices } = require("../services");
const informacoesUteisServices = new InformacoesUteisServices();

class InformacoesUteisController {
  static async listarInformacoesUteis(req, res) {
    try {
      const todasInformacoes = await informacoesUteisServices.listarRegistros();
      return res.status(200).json(todasInformacoes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarInformacoesUteis(req, res) {
    const novaInformacao = req.body;
    try {
      const InformacaoUtilCriada = await informacoesUteisServices.criarRegistro(
        novaInformacao
      );
      return res.status(201).json(InformacaoUtilCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarInformacoesUteis(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await informacoesUteisServices.atualizarRegistro(atualizacoes, id);
      const informacaoAtualizada = await informacoesUteisServices.listarRegistroPorId(id);
      return res.status(200).json(informacaoAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirInformacoesUteis(req, res) {
    const { id } = req.params;
    try {
      await informacoesUteisServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = InformacoesUteisController;
