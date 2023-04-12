const { Router } = require("express");
const InformacoesUteisController = require("../controllers/InformacoesUteisController");

const router = Router();

router.get("/informacoes-uteis", InformacoesUteisController.listarInformacoesUteis);
router.post("/informacoes-uteis", InformacoesUteisController.criarInformacoesUteis);
router.put(
  "/informacoes-uteis/:id",
  InformacoesUteisController.atualizarInformacoesUteis
);
router.delete(
  "/informacoes-uteis/:id",
  InformacoesUteisController.excluirInformacoesUteis
);

module.exports = router;
