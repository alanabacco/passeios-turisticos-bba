const { Router } = require("express");
const RestaurantesController = require("../controllers/RestaurantesController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/restaurantes", RestaurantesController.listarRestaurantes);
router.post("/restaurantes", autenticador, RestaurantesController.criarRestaurante);
router.put("/restaurantes/:id", autenticador, RestaurantesController.atualizarRestaurante);
router.delete("/restaurantes/:id", autenticador, RestaurantesController.excluirRestaurante);

module.exports = router;
