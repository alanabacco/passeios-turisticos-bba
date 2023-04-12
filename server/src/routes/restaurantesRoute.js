const { Router } = require("express");
const RestaurantesController = require("../controllers/RestaurantesController");

const router = Router();

router.get("/restaurantes", RestaurantesController.listarRestaurantes);
router.post("/restaurantes", RestaurantesController.criarRestaurante);
router.put("/restaurantes/:id", RestaurantesController.atualizarRestaurante);
router.delete("/restaurantes/:id", RestaurantesController.excluirRestaurante);

module.exports = router;
