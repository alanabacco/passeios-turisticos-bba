const database = require("../models");

class RestauranteController {
  static async listaRestaurantes(req, res) {
    try {
      const todosOsRestaurantes = await database.restaurante.findAll();
      return res.status(200).json(todosOsRestaurantes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaRestaurante(req, res) {
    const novoRestaurante = req.body;
    try {
      const restauranteCriado = await database.restaurante.create(novoRestaurante);
      return res.status(201).json(restauranteCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaRestaurante(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.restaurante.update(atualizacoes, { where: { id: Number(id) } });
      const restauranteAtualizado = await database.restaurante.findOne({
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
      await database.restaurante.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = RestauranteController;
