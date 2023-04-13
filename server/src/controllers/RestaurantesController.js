const { RestaurantesServices } = require("../services");
const restaurantesServices = new RestaurantesServices();

class RestaurantesController {
  static async listarRestaurantes(req, res) {
    try {
      const todosOsRestaurantes = await restaurantesServices.listarRegistros();
      return res.status(200).json(todosOsRestaurantes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarRestaurante(req, res) {
    const novoRestaurante = req.body;
    try {
      const restauranteCriado = await restaurantesServices.criarRegistro(novoRestaurante);
      return res.status(201).json(restauranteCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarRestaurante(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await restaurantesServices.atualizarRegistro(atualizacoes, id);
      const restauranteAtualizado = await restaurantesServices.listarRegistroPorId(id);
      return res.status(200).json(restauranteAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirRestaurante(req, res) {
    const { id } = req.params;
    try {
      await restaurantesServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = RestaurantesController;
