const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.cadastarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const saltRoundes = 10;

    const senhaHash = await bcrypt.hash(senha, saltRoundes);

    await db.query("INSERT INTO usuarios(nome, email, senha) VALUES(?, ?, ?)", [
      nome,
      email,
      senhaHash,
    ]);
    res.status(201).send("Usuário cadastrado!");
  } catch (error) {
    res.status(500).send("Erro ao cadastrar usuário!");
  }
};
