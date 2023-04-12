const { Router } = require("express");
const HospedagensController = require("../controllers/HospedagensController");

const router = Router();

router.get("/hospedagens", HospedagensController.listarHospedagens);
router.post("/hospedagens", HospedagensController.criarHospedagem);
router.put("/hospedagens/:id", HospedagensController.atualizarHospedagem);
router.delete("/hospedagens/:id", HospedagensController.excluirHospedagem);

module.exports = router;
