const { UsuariosServices } = require("../services");
const usuariosServices = new UsuariosServices();

class UsuariosController {
  static async listarUsuarios(req, res) {
    try {
      const todosOsUsuarios = await usuariosServices.listarRegistros();
      return res.status(200).json(todosOsUsuarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
      const usuario = await usuariosServices.listarRegistroPorId(id);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarUsuario(req, res) {
    const novoUsuario = req.body;
    try {
      const usuarioCriado = await usuariosServices.criarRegistro(novoUsuario);
      return res.status(201).json(usuarioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarUsuario(req, res) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await usuariosServices.atualizarRegistro(atualizacoes, id);
      const usuarioAtualizado = await usuariosServices.listarRegistroPorId(id);
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirUsuario(req, res) {
    const { id } = req.params;
    try {
      await usuariosServices.excluirRegistro(id);
      return res.status(200).json({ message: `id ${id} excluído.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraUsuario(req, res) {
    const { id } = req.params;
    try {
      await usuariosServices.restaurarRegistro(id);
      return res.status(200).json({ message: `id ${id} restaurado.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UsuariosController;
