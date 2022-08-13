const express = require("express");
const router = express.Router();
const productoController = require("../controllers/carrito_add");

router.post("/", productoController.Addproduct);
router.delete("/:id", productoController.eliminarProduct);
router.get("/", productoController.obtenerProduct);

module.exports = router;
