const NaoEncontrado = require("../errors/NaoEncontrado");
const { UsuariosServices } = require("../services");

const { hash } = require("bcryptjs"); // lib pra criptografar senha
const uuid = require("uuid");

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

  static async listarUsuarioPorNome(req, res, next) {
    const { nome } = req.params;
    try {
      const usuario = await usuariosServices.listarRegistroPorNomeUsuario(nome);
      console.log(usuario);

      if (usuario !== null) {
        res.status(200).json(usuario);
      } else {
        next(new NaoEncontrado("Nome de usuário não encontrado."));
      }
    } catch (error) {
      next(error); // encaminha o erro para o middleware
    }
  }

  static async criarUsuario(req, res, next) {
    const { nome, senha } = req.body;

    if (nome === undefined || senha === undefined) {
      return res.status(400).send({
        mensagem: "Nome e senha são obrigatórios.",
        status: 400,
      });
    }

    const senhaHash = await hash(senha, 8); // criptografa a senha
    const novoUsuario = {
      id: uuid.v4(),
      nome: nome,
      senha: senhaHash,
    };

    try {
      const usuarioExiste = await usuariosServices.listarRegistroPorNomeUsuario(nome);

      if (usuarioExiste) {
        res.status(401).send({
          mensagem: "Esse nome de usuário já existe.",
          status: 401,
        });
      }
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
