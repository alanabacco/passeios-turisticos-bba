const NaoEncontrado = require("../errors/NaoEncontrado");
const { InformacoesUteisServices } = require("../services");
const informacoesUteisServices = new InformacoesUteisServices();

class InformacoesUteisController {
  static async listarInformacoesUteis(req, res, next) {
    try {
      const todasInformacoes = await informacoesUteisServices.listarRegistros();
      todasInformacoes.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });
      return res.status(200).json(todasInformacoes);
    } catch (error) {
      next(error);
    }
  }

  static async listarInformacaoUtilPorId(req, res, next) {
    const { id } = req.params;
    try {
      const informacaoUtil = await informacoesUteisServices.listarRegistroPorId(id);
      if (informacaoUtil !== null) {
        return res.status(200).json(informacaoUtil);
      } else {
        next(new NaoEncontrado("Id de informação útil não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarInformacoesUteis(req, res, next) {
    const novaInformacao = req.body;
    try {
      const InformacaoUtilCriada = await informacoesUteisServices.criarRegistro(
        novaInformacao
      );
      return res.status(201).json(InformacaoUtilCriada);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarInformacoesUteis(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await informacoesUteisServices.atualizarRegistro(atualizacoes, id);
      const informacaoAtualizada = await informacoesUteisServices.listarRegistroPorId(id);

      if (informacaoAtualizada !== null) {
        res.status(200).json(informacaoAtualizada);
      } else {
        next(new NaoEncontrado("Id de informações úteis não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirInformacoesUteis(req, res, next) {
    const { id } = req.params;
    try {
      const informacoesUteisId = await informacoesUteisServices.listarRegistroPorId(id);

      if (informacoesUteisId !== null) {
        await informacoesUteisServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next(new NaoEncontrado("Id de informações úteis não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InformacoesUteisController;
