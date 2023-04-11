const { Router } = require("express");
const GuiaTuristicoController = require("../controllers/GuiaTuristicoController");

const router = Router();

router.get("/guia-turistico", GuiaTuristicoController.listaGuias);
router.get("/guia-turistico/:id", GuiaTuristicoController.listaGuiaPorId);
router.post("/guia-turistico", GuiaTuristicoController.criaGuia);
router.put("/guia-turistico/:id", GuiaTuristicoController.atualizaGuia);
router.delete("/guia-turistico/:id", GuiaTuristicoController.excluiGuia);

module.exports = router;
