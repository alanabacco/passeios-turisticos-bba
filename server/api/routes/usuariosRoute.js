const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/usuarios", autenticador, UsuariosController.listarUsuarios);
router.get("/usuarios/:id", autenticador, UsuariosController.listarUsuarioPorId);
router.get("/usuarios/usuario/:nome", autenticador, UsuariosController.listarUsuarioPorNome);
router.post("/usuarios", autenticador, UsuariosController.criarUsuario);
router.put("/usuarios/:id", autenticador, UsuariosController.atualizarUsuario);
router.delete("/usuarios/:id", autenticador, UsuariosController.excluirUsuario);
router.post("/usuarios/:id/restaura", autenticador, UsuariosController.restauraUsuario);

module.exports = router;
