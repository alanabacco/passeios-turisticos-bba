const { verify, decode } = require("jsonwebtoken");

const process = require("process");
const secret = `${process.env.HASH_SECRET}`;

const autenticador = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({
      mensagem: "Access token não informado.",
      status: 401,
    });
  }

  const [baerer, accessToken] = token.split(" ");

  try {
    verify(accessToken, secret);

    const { id, nome } = await decode(accessToken);

    req.id = id;
    req.nome = nome;

    return next();
  } catch (error) {
    res.status(401).send("Usuário não autorizado.");
  }
};

module.exports = autenticador;
