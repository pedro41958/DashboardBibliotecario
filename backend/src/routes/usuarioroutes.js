const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/usuariocontroller");

router.post("/cadastrarUsuario", ctrl.cadastarUsuario);

module.exports = router;
