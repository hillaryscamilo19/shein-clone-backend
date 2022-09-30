const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//create services
const app = express();
const router = express.Router();

//conectamos a la BD
conectarDB();

app.use(cors());

app.use(express.json());

app.use("/api/productos", require("./routes/producto"));
app.use("/api/addcarrito", require("./routes/carrito"));
app.use("/api/auth", require("./routes/Usuario"));

//definir rutas principal
app.get("/", (req, res) => {
  res.send("hola mundooo🧬✔");
});

app.listen(4000, () => {
  console.log("el servidor esta corriendo");
});
