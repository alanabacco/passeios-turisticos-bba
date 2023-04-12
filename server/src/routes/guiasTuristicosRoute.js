const { Router } = require("express");
const GuiasTuristicosController = require("../controllers/GuiasTuristicosController");

const router = Router();

router.get("/guias-turisticos", GuiasTuristicosController.listaGuias);
router.get("/guias-turisticos/:id", GuiasTuristicosController.listaGuiaPorId);
router.post("/guias-turisticos", GuiasTuristicosController.criaGuia);
router.put("/guias-turisticos/:id", GuiasTuristicosController.atualizaGuia);
router.delete("/guias-turisticos/:id", GuiasTuristicosController.excluiGuia);

module.exports = router;
