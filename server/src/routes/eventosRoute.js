const { Router } = require("express");
const EventosController = require("../controllers/EventosController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/eventos", EventosController.listarEventos);
router.post("/eventos", autenticador,  EventosController.criarEventos);
router.put("/eventos/:id", autenticador, EventosController.atualizarEventos);
router.delete("/eventos/:id", autenticador, EventosController.excluirEventos);

module.exports = router;
