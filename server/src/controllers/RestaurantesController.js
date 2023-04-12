const database = require("../models");

class RestaurantesController {
  static async listaRestaurantes(req, res) {
    try {
      const todosOsRestaurantes = await database.restaurantes.findAll();
      return res.status(200).json(todosOsRestaurantes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaRestaurante(req, res) {
    const novoRestaurante = req.body;
    try {
      const restauranteCriado = await database.restaurantes.create(novoRestaurante);
      return res.status(201).json(restauranteCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaRestaurante(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.restaurantes.update(atualizacoes, { where: { id: Number(id) } });
      const restauranteAtualizado = await database.restaurantes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(restauranteAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluiRestaurante(req, res) {
    const { id } = req.params;
    try {
      await database.restaurantes.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = RestaurantesController;
