const { Router } = require("express");
const AuthController = require("../controllers/AuthController");

const router = Router();

router.post("/auth/login", AuthController.login);
router.post("/auth/logout", AuthController.logout);

module.exports = router;
