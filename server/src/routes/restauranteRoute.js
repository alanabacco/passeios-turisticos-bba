const { Router } = require("express");
const RestauranteController = require("../controllers/RestauranteController");

const router = Router();

router.get("/restaurante", RestauranteController.listaRestaurantes);
router.post("/restaurante", RestauranteController.criaRestaurante);
router.put("/restaurante/:id", RestauranteController.atualizaRestaurante);
router.delete("/restaurante/:id", RestauranteController.excluiRestaurante);

module.exports = router;
