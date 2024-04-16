const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const manipulador404 = require("./middlewares/manipulador404");

const app = express();
app.get(express.static("public"));

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-config.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  cors({
    origin: "https://passeiosturisticosbba.vercel.app",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", express.static("public"));

routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

module.exports = app;
