const { Router } = require("express");
const AtracoesTuristicasController = require("../controllers/AtracoesTuristicasController");

const router = Router();

router.get("/atracoes-turisticas", AtracoesTuristicasController.listarAtracoesTuristicas);
router.post("/atracoes-turisticas", AtracoesTuristicasController.criarAtracaoTuristica);
router.put(
  "/atracoes-turisticas/:id",
  AtracoesTuristicasController.atualizarAtracaoTuristica
);
router.delete(
  "/atracoes-turisticas/:id",
  AtracoesTuristicasController.excluirAtracaoTuristica
);

module.exports = router;
