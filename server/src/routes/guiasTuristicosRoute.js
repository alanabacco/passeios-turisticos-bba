const { Router } = require("express");
const GuiasTuristicosController = require("../controllers/GuiasTuristicosController");

const router = Router();

router.get("/guias-turisticos", GuiasTuristicosController.listarGuias);
router.get("/guias-turisticos/:id", GuiasTuristicosController.listarGuiaPorId);
router.post("/guias-turisticos", GuiasTuristicosController.criarGuia);
router.put("/guias-turisticos/:id", GuiasTuristicosController.atualizarGuia);
router.delete("/guias-turisticos/:id", GuiasTuristicosController.excluirGuia);

module.exports = router;
