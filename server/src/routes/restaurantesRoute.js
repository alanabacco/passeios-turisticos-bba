const { Router } = require("express");
const RestaurantesController = require("../controllers/RestaurantesController");

const router = Router();

router.get("/restaurantes", RestaurantesController.listaRestaurantes);
router.post("/restaurantes", RestaurantesController.criaRestaurante);
router.put("/restaurantes/:id", RestaurantesController.atualizaRestaurante);
router.delete("/restaurantes/:id", RestaurantesController.excluiRestaurante);

module.exports = router;
