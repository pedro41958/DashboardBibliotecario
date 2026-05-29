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

exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  async function buscarUsuario() {
    const [rows] = await db.query("SELECT * FROM usuarios");
    return rows;
  }

  const usuario = buscarUsuario.json();

  usuario.find((u) => u.email === email);

  if (!usuario) return res.status(401).send("Usuário não encontrado!");

  try {
    const senhaHash = await bcrypt.compare(senha, usuario.senha);

    if (senhaHash) {
      res.status(201).send("Login realizado!");
    } else {
      res.status(401).send("Senha incorreta!");
    }
  } catch (error) {
    res.status(500).send("Erro ao realizar login!");
  }
};
