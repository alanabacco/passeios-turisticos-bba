const NaoEncontrado = require("../errors/NaoEncontrado");
const { GuiasTuristicosServices } = require("../services");
const guiasTuristicosServices = new GuiasTuristicosServices();

class GuiasTuristicosController {
  static async listarGuias(req, res, next) {
    try {
      const todosOsGuias = await guiasTuristicosServices.listarRegistros();
      todosOsGuias.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });
      return res.status(200).json(todosOsGuias);
    } catch (error) {
      next(error);
    }
  }

  static async listarGuiaPorId(req, res, next) {
    const { id } = req.params;
    try {
      const guia = await guiasTuristicosServices.listarRegistroPorId(id);
      if (guia !== null) {
        return res.status(200).json(guia);
      } else {
        next(new NaoEncontrado("Id de guia turístico não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarGuia(req, res, next) {
    const novoGuia = req.body;
    try {
      const guiaCriado = await guiasTuristicosServices.criarRegistro(novoGuia);
      return res.status(201).json(guiaCriado);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarGuia(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await guiasTuristicosServices.atualizarRegistro(atualizacoes, id);
      const guiaAtualizado = await guiasTuristicosServices.listarRegistroPorId(id);

      if (guiaAtualizado !== null) {
        res.status(200).json(guiaAtualizado);
      } else {
        next(new NaoEncontrado("Id de guia turístico não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirGuia(req, res, next) {
    const { id } = req.params;
    try {
      const guiaPorId = await guiasTuristicosServices.listarRegistroPorId(id);

      if (guiaPorId !== null) {
        await guiasTuristicosServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next(new NaoEncontrado("Id de guia turístico não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GuiasTuristicosController;
