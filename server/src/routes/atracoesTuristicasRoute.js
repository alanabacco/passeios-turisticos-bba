const { Router } = require("express");
const AtracoesTuristicasController = require("../controllers/AtracoesTuristicasController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/atracoes-turisticas", AtracoesTuristicasController.listarAtracoesTuristicas);
router.get(
  "/atracoes-turisticas/:id",
  autenticador,
  AtracoesTuristicasController.listarAtracoesTuristicasPorId
);
router.post(
  "/atracoes-turisticas",
  autenticador,
  AtracoesTuristicasController.criarAtracaoTuristica
);
router.put(
  "/atracoes-turisticas/:id",
  autenticador,
  AtracoesTuristicasController.atualizarAtracaoTuristica
);
router.delete(
  "/atracoes-turisticas/:id",
  autenticador,
  AtracoesTuristicasController.excluirAtracaoTuristica
);

module.exports = router;
