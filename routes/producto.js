//rutas para productos
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productocontroller');

//API/productos
router.get('/', productoController.obtenerProductos);
router.post('/', productoController.crearProducto);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProductosByID);
router.delete('/:id', productoController.eliminarProductos);




module.exports = router;