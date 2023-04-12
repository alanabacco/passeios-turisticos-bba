const { Router } = require("express");
const HospedagemController = require("../controllers/HospedagemController");

const router = Router();

router.get("/hospedagem", HospedagemController.listaHospedagens);
router.post("/hospedagem", HospedagemController.criaHospedagem);
router.put("/hospedagem/:id", HospedagemController.atualizaHospedagem);
router.delete("/hospedagem/:id", HospedagemController.excluiHospedagem);

module.exports = router;
