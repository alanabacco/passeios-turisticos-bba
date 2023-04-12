const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");

const router = Router();

router.get("/usuarios", UsuariosController.listaUsuarios);
router.post("/usuarios", UsuariosController.criaUsuario);
router.put("/usuarios/:id", UsuariosController.atualizaUsuario);

module.exports = router;
