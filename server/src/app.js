const express = require("express");
const routes = require("./routes");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const manipulador404 = require("./middlewares/manipulador404");
const cors = require("cors");

const app = express();

const port = 8080;

routes(app);

app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: "Content-Type",
  })
);
app.use(manipulador404);
app.use(manipuladorDeErros);

app.listen(port, () => console.log(`escutando na porta ${port}`));

module.exports = app;
