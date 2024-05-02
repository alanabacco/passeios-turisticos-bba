const process = require("process");
const app = require("./app");

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) {
    return console.error(`erro ao iniciar o servidor: ${err}`);
  }
  console.log(`escutando na porta ${port}`);
});
