const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

  console.log(req.body);

  try {
    const [rows] = await db.query("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);

    const usuario = rows[0];

    if (!usuario) return res.status(401).send("Usuário não encontrado!");
    const senhaHash = await bcrypt.compare(senha, usuario.senha);

    if (senhaHash) {
      const token = jwt.sign(
        { id: usuario.id, nome: usuario.nome },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
      );

      res.status(201).json({ message: "Login realizado!", auth: true, token });
    } else {
      res.status(401).send("Senha incorreta!");
    }
  } catch (error) {
    res.status(500).send("Erro ao realizar login!");
  }
};
