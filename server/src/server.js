const process = require("process");
const app = require("./app");

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`escutando na porta ${port}`));
