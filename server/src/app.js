const express = require("express");
const routes = require("./routes");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const manipulador404 = require("./middlewares/manipulador404");

const app = express();

const port = 3000;

routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

app.listen(port, () => console.log(`escutando na porta ${port}`));

module.exports = app;
