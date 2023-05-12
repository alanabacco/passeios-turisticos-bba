const { Router } = require("express");
const AuthController = require("../controllers/AuthController");
const autenticador = require("../middlewares/autenticador");

const router = Router();

router.post("/auth/login", AuthController.login);
router.post("/auth/logout", autenticador, AuthController.logout);
router.get("/auth/session", autenticador, AuthController.getSession);

module.exports = router;
