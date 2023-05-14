const { Router } = require("express");
const InformacoesUteisController = require("../controllers/InformacoesUteisController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/informacoes-uteis", InformacoesUteisController.listarInformacoesUteis);
router.get(
  "/informacoes-uteis/:id",
  autenticador,
  InformacoesUteisController.listarInformacaoUtilPorId
);
router.post(
  "/informacoes-uteis",
  autenticador,
  InformacoesUteisController.criarInformacoesUteis
);
router.put(
  "/informacoes-uteis/:id",
  autenticador,
  InformacoesUteisController.atualizarInformacoesUteis
);
router.delete(
  "/informacoes-uteis/:id",
  autenticador,
  InformacoesUteisController.excluirInformacoesUteis
);

module.exports = router;
