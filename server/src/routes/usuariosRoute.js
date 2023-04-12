const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");

const router = Router();

router.get("/usuarios", UsuariosController.listarUsuarios);
router.post("/usuarios", UsuariosController.criarUsuario);
router.put("/usuarios/:id", UsuariosController.atualizarUsuario);

module.exports = router;
