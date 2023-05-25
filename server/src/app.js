const express = require("express");
const process = require("process");
const cors = require("cors");
const routes = require("./routes");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const manipulador404 = require("./middlewares/manipulador404");

const app = express();

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "https://passeiosturisticosbba.vercel.app",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

app.listen(port, () => console.log(`escutando na porta ${port}`));

module.exports = app;
