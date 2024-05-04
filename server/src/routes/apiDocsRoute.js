/* eslint-disable no-undef */
const { Router } = require("express");
const path = require("path");
const swaggerUi = require("swagger-ui-express");

const router = Router();

const swaggerDocument = require(path.join(__dirname, "../../public/swagger-config.json"));

router.use("/api-docs", swaggerUi.serve);

router.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router;
