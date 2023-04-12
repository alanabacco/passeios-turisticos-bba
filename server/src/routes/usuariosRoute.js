const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");

const router = Router();

router.get("/usuarios", UsuariosController.listarUsuarios);
router.post("/usuarios", UsuariosController.criarUsuario);
router.put("/usuarios/:id", UsuariosController.atualizarUsuario);
router.delete("/usuarios/:id", UsuariosController.excluirUsuario);

module.exports = router;
