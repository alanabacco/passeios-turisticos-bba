const { Router } = require("express");
const AtracoesTuristicasController = require("../controllers/AtracoesTuristicasController");

const router = Router();

router.get("/atracoes-turisticas", AtracoesTuristicasController.listaAtracoesTuristicas);
router.post("/atracoes-turisticas", AtracoesTuristicasController.criaAtracaoTuristica);
router.put(
  "/atracoes-turisticas/:id",
  AtracoesTuristicasController.atualizaAtracaoTuristica
);
router.delete(
  "/atracoes-turisticas/:id",
  AtracoesTuristicasController.excluiAtracaoTuristica
);

module.exports = router;
