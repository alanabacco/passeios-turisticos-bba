const { Router } = require("express");
const AtracoesGuiasController = require("../controllers/AtracoesGuiasController");

const router = Router();

router.get("/atracoes-guias", AtracoesGuiasController.listarAtracoesEGuias);
router.post("/atracoes-guias", AtracoesGuiasController.criarAtracaoEGuia);
router.put("/atracoes-guias/:id", AtracoesGuiasController.atualizarAtracaoEGuia);
router.delete("/atracoes-guias/:id", AtracoesGuiasController.excluirAtracaoEGuia);

module.exports = router;
