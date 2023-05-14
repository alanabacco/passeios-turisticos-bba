const { Router } = require("express");
const AtracoesGuiasController = require("../controllers/AtracoesGuiasController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/atracoes-guias", AtracoesGuiasController.listarAtracoesEGuias);
router.get("/atracoes-guias/:id", autenticador, AtracoesGuiasController.listarAtracaoEGuiaPorId);
router.post("/atracoes-guias", autenticador, AtracoesGuiasController.criarAtracaoEGuia);
router.put("/atracoes-guias/:id", autenticador, AtracoesGuiasController.atualizarAtracaoEGuia);
router.delete("/atracoes-guias/:id", autenticador, AtracoesGuiasController.excluirAtracaoEGuia);

module.exports = router;
