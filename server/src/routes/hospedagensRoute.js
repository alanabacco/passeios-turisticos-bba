const { Router } = require("express");
const HospedagensController = require("../controllers/HospedagensController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.get("/hospedagens", HospedagensController.listarHospedagens);
router.get("/hospedagens/:id", autenticador, HospedagensController.listarHospedagemPorId);
router.post("/hospedagens", autenticador, HospedagensController.criarHospedagem);
router.put("/hospedagens/:id", autenticador, HospedagensController.atualizarHospedagem);
router.delete("/hospedagens/:id", autenticador, HospedagensController.excluirHospedagem);

module.exports = router;
