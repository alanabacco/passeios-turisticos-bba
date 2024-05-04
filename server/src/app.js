/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const path = require("path");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const manipulador404 = require("./middlewares/manipulador404");
const routes = require("./routes");

const app = express();
app.use(express.static(path.join(__dirname, "../public")));

app.use(
  cors({
    origin: "https://passeiosturisticosbba.vercel.app",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

module.exports = app;
