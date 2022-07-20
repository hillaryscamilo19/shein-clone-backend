const Producto = require("../models/products");

exports.crearProducto = async (req, res) => {
  try {
    let producto;

    //Creamos nuestro producto
    producto = new Producto(req.body);

    await producto.save();
    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const { nombre, categoria, ubicacion, precio } = req.body;
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({ msg: "no existe un producto" });
    }

    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.ubicacion = ubicacion;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      producto,
      { new: true }
    );
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerProductosByID = async (req, res) => {
    try {
      let producto = await Producto.findById({_id: req.params.id});
  
      if (!producto) {
        res.status(404).json({ msg: "no existe un producto" });
      }

      res.json(producto);

    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };

  exports.eliminarProductos = async (req, res) => {
    const myID = req.params.id

    try {
      let producto = await Producto.findById({_id: myID})
  
      if (!producto) {
        res.status(404).json({ msg: "no existe un producto" });
      }

      await Producto.findOneAndRemove({ _id: req.require.id })

      producto.delete()
      producto.save()
      res.json({msg: 'Producto eliminado con exito'})

      res.json(producto);

    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };



