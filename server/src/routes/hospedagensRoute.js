const { Router } = require("express");
const HospedagensController = require("../controllers/HospedagensController");

const router = Router();

router.get("/hospedagens", HospedagensController.listaHospedagens);
router.post("/hospedagens", HospedagensController.criaHospedagem);
router.put("/hospedagens/:id", HospedagensController.atualizaHospedagem);
router.delete("/hospedagens/:id", HospedagensController.excluiHospedagem);

module.exports = router;
