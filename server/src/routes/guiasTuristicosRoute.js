const { Router } = require("express");
const GuiasTuristicosController = require("../controllers/GuiasTuristicosController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/guias-turisticos", GuiasTuristicosController.listarGuias);
router.get("/guias-turisticos/:id", autenticador, GuiasTuristicosController.listarGuiaPorId);
router.post("/guias-turisticos", autenticador, GuiasTuristicosController.criarGuia);
router.put("/guias-turisticos/:id", autenticador, GuiasTuristicosController.atualizarGuia);
router.delete("/guias-turisticos/:id", autenticador, GuiasTuristicosController.excluirGuia);

module.exports = router;
