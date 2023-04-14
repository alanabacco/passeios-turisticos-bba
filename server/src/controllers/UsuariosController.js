const NaoEncontrado = require("../errors/NaoEncontrado");
const { UsuariosServices } = require("../services");
const usuariosServices = new UsuariosServices();

class UsuariosController {
  static async listarUsuarios(req, res, next) {
    try {
      const todosOsUsuarios = await usuariosServices.listarRegistros();
      return res.status(200).json(todosOsUsuarios);
    } catch (error) {
      next(error);
    }
  }

  static async listarUsuarioPorId(req, res, next) {
    const { id } = req.params;
    try {
      const usuario = await usuariosServices.listarRegistroPorId(id);

      if (usuario !== null) {
        res.status(200).json(usuario);
      } else {
        next(new NaoEncontrado("Id de usuário não encontrado."));
      }
    } catch (error) {
      next(error); // encaminha o erro para o middleware
    }
  }

  static async criarUsuario(req, res, next) {
    const novoUsuario = req.body;
    try {
      const usuarioCriado = await usuariosServices.criarRegistro(novoUsuario);
      return res.status(201).json(usuarioCriado);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarUsuario(req, res, next) {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
      await usuariosServices.atualizarRegistro(atualizacoes, id);
      const usuarioAtualizado = await usuariosServices.listarRegistroPorId(id);

      if (usuarioAtualizado !== null) {
        res.status(200).json(usuarioAtualizado);
      } else {
        next(new NaoEncontrado("Id de usuário não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirUsuario(req, res, next) {
    const { id } = req.params;
    try {
      const usuarioPorId = await usuariosServices.listarRegistroPorId(id);

      if (usuarioPorId !== null) {
        await usuariosServices.excluirRegistro(id);
        return res.status(200).json({ message: `id ${id} excluído.` });
      } else {
        next(new NaoEncontrado("Id de usuário não encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async restauraUsuario(req, res, next) {
    const { id } = req.params;
    try {
      await usuariosServices.restaurarRegistro(id);
      return res.status(200).json({ message: `id ${id} restaurado.` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsuariosController;
