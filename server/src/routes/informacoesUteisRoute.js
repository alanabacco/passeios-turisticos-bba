const { Router } = require("express");
const InformacoesUteisController = require("../controllers/InformacoesUteisController");

const router = Router();

router.get("/informacoes-uteis", InformacoesUteisController.listaInformacoesUteis);
router.post("/informacoes-uteis", InformacoesUteisController.criaInformacoesUteis);
router.put("/informacoes-uteis/:id", InformacoesUteisController.atualizaInformacoesUteis);
router.delete(
  "/informacoes-uteis/:id",
  InformacoesUteisController.excluiInformacoesUteis
);

module.exports = router;
