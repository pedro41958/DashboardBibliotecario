const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/livrocontroller");

router.get("/livros", ctrl.listarLivros);

module.exports = router;
