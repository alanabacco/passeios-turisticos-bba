const { Router } = require("express");
const EventosController = require("../controllers/EventosController");

const router = Router();

router.get("/eventos", EventosController.listarEventos);
router.post("/eventos", EventosController.criarEventos);
router.put("/eventos/:id", EventosController.atualizarEventos);
router.delete("/eventos/:id", EventosController.excluirEventos);

module.exports = router;
