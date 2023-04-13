const { GuiasTuristicosServices } = require("../services");
const guiasTuristicosServices = new GuiasTuristicosServices();

class GuiasTuristicosController {
  static async listarGuias(req, res) {
    try {
      const todosOsGuias = await guiasTuristicosServices.listarRegistros();
      return res.status(200).json(todosOsGuias);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarGuiaPorId(req, res) {
    const { id } = req.params;
    try {
      const guia = await guiasTuristicosServices.listarRegistroPorId(id);
      return res.status(200).json(guia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarGuia(req, res) {
    const novoGuia = req.body;
    try {
      const guiaCriado = await guiasTuristicosServices.criarRegistro(novoGuia);
      return res.status(201).json(guiaCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarGuia(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await guiasTuristicosServices.atualizarRegistro(atualizacoes, id);
      const guiaAtualizado = await guiasTuristicosServices.listarRegistroPorId(id);
      return res.status(200).json(guiaAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirGuia(req, res) {
    const { id } = req.params;
    try {
      await guiasTuristicosServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = GuiasTuristicosController;
