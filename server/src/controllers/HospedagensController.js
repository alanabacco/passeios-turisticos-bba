const { HospedagensServices } = require("../services");
const hospedagensServices = new HospedagensServices();

class HospedagensController {
  static async listarHospedagens(req, res) {
    try {
      const todasAsHospedagens = await hospedagensServices.listarRegistros();
      return res.status(200).json(todasAsHospedagens);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarHospedagem(req, res) {
    const novaHospedagem = req.body;
    try {
      const hospedagemCriada = await hospedagensServices.criarRegistro(novaHospedagem);
      return res.status(201).json(hospedagemCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarHospedagem(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await hospedagensServices.atualizarRegistro(atualizacoes, id);
      const hospedagemAtualizada = await hospedagensServices.listarRegistroPorId(id);
      return res.status(200).json(hospedagemAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirHospedagem(req, res) {
    const { id } = req.params;
    try {
      await hospedagensServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = HospedagensController;
