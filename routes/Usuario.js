//rutas para productos
const express = require("express");
const router = express.Router();
const Auth = require("../controllers/Auth.controller");

//API/usuario
router.post("/register", Auth.register);
router.post("/login", Auth.login);
// router.post("/:id", Auth.actualizarProducto);


module.exports = router;