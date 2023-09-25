const NaoEncontrado = require("../errors/NaoEncontrado");
const { HospedagensServices } = require("../services");
const hospedagensServices = new HospedagensServices();

class HospedagensController {
  static async listarHospedagens(req, res, next) {
    try {
      const todasAsHospedagens = await hospedagensServices.listarRegistros();
      todasAsHospedagens.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });
      return res.status(200).json(todasAsHospedagens);
    } catch (error) {
      next(error);
    }
  }

  static async listarHospedagemPorId(req, res, next) {
    const { id } = req.params;
    try {
      const hospedagem = await hospedagensServices.listarRegistroPorId(id);
      if (hospedagem !== null) {
        return res.status(200).json(hospedagem);
      } else {
        next(new NaoEncontrado("Id de hospedagem não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarHospedagem(req, res, next) {
    const novaHospedagem = req.body;
    try {
      const hospedagemCriada = await hospedagensServices.criarRegistro(novaHospedagem);
      return res.status(201).json(hospedagemCriada);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarHospedagem(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await hospedagensServices.atualizarRegistro(atualizacoes, id);
      const hospedagemAtualizada = await hospedagensServices.listarRegistroPorId(id);

      if (hospedagemAtualizada !== null) {
        res.status(200).json(hospedagemAtualizada);
      } else {
        next(new NaoEncontrado("Id de hospedagem não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirHospedagem(req, res, next) {
    const { id } = req.params;
    try {
      const hospedagemId = await hospedagensServices.listarRegistroPorId(id);

      if (hospedagemId !== null) {
        await hospedagensServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next(new NaoEncontrado("Id de hospedagem não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = HospedagensController;
