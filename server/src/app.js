/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const manipulador404 = require("./middlewares/manipulador404");

const app = express();
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../public/swagger-config.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

app.use(
  cors({
    origin: "https://passeiosturisticosbba.vercel.app",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

module.exports = app;
