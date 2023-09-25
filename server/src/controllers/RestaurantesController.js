const NaoEncontrado = require("../errors/NaoEncontrado");
const { RestaurantesServices } = require("../services");
const restaurantesServices = new RestaurantesServices();

class RestaurantesController {
  static async listarRestaurantes(req, res, next) {
    try {
      const todosOsRestaurantes = await restaurantesServices.listarRegistros();
      todosOsRestaurantes.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });
      return res.status(200).json(todosOsRestaurantes);
    } catch (error) {
      next(error);
    }
  }

  static async listarRestaurantePorId(req, res, next) {
    const { id } = req.params;
    try {
      const restaurante = await restaurantesServices.listarRegistroPorId(id);
      if (restaurante !== null) {
        return res.status(200).json(restaurante);
      } else {
        next(new NaoEncontrado("Id de restaurante não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarRestaurante(req, res, next) {
    const novoRestaurante = req.body;
    try {
      const restauranteCriado = await restaurantesServices.criarRegistro(novoRestaurante);
      return res.status(201).json(restauranteCriado);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarRestaurante(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await restaurantesServices.atualizarRegistro(atualizacoes, id);
      const restauranteAtualizado = await restaurantesServices.listarRegistroPorId(id);

      if (restauranteAtualizado !== null) {
        res.status(200).json(restauranteAtualizado);
      } else {
        next(new NaoEncontrado("Id de restaurante não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirRestaurante(req, res, next) {
    const { id } = req.params;
    try {
      const restaurantePorId = await restaurantesServices.listarRegistroPorId(id);

      if (restaurantePorId !== null) {
        await restaurantesServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next(new NaoEncontrado("Id de restaurante não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RestaurantesController;
