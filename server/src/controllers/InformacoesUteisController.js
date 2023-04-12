const database = require("../models");

class InformacoesUteisController {
  static async listaInformacoesUteis(req, res) {
    try {
      const todasInformacoes = await database.informacoes_uteis.findAll();
      return res.status(200).json(todasInformacoes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaInformacoesUteis(req, res) {
    const novaInformacao = req.body;
    try {
      const InformacaoUtilCriada = await database.informacoes_uteis.create(
        novaInformacao
      );
      return res.status(201).json(InformacaoUtilCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaInformacoesUteis(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.informacoes_uteis.update(atualizacoes, {
        where: { id: Number(id) },
      });
      const informacaoAtualizada = await database.informacoes_uteis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(informacaoAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluiInformacoesUteis(req, res) {
    const { id } = req.params;
    try {
      await database.informacoes_uteis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = InformacoesUteisController;
