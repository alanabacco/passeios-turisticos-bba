const database = require("../models");

class UsuariosController {
  static async listaUsuarios(req, res) {
    try {
      const todosOsUsuarios = await database.usuarios.findAll();
      return res.status(200).json(todosOsUsuarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaUsuario(req, res) {
    const novoUsuario = req.body;
    try {
      const usuarioCriado = await database.usuarios.create(novoUsuario);
      return res.status(201).json(usuarioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await database.usuarios.update(atualizacoes, { where: { id: Number(id) } });
      const usuarioAtualizado = await database.usuarios.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluiUsuario(req, res) {
    const { id } = req.params;
    try {
      await database.usuarios.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UsuariosController;
