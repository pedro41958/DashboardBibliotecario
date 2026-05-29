const express = require("express");
const cors = require("cors");
const routesLivro = require("./routes/livroroutes");
const routesUsuario = require("./routes/usuarioroutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(routesLivro);
app.use(routesUsuario);

app.listen(3000, () => {
  console.log("🚀 Server: Port 3000");
});
