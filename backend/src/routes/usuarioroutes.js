const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/usuariocontroller");

router.post("/cadastrarUsuario", ctrl.cadastarUsuario);
router.post("/loginUsuario", ctrl.loginUsuario);

module.exports = router;
