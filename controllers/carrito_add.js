const Productoadd = require("../models/productadd");

exports.Addproduct = async (req, res) => {
  const nueba = {
    userId: req.body.id,
    Titleproduct: req.body.title,
    PriceId: req.body.price,
    ImgProduct: req.body.img,
    object: req.body.object,
    quantity: req.body.quantity
  };
  try {
    //Creamos nuestro producto
    const producto = new Productoadd(nueba);
    await producto.save();
    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error", error);
  }
};

exports.eliminarProduct = async (req, res) => {
    try {
      try {
        let product = await Productoadd.findById(req.params.id);
        if (!product) {
          res.status(404).json({ msg: "product not found" });
        }
        await Productoadd.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: "producto retirado con éxito" });
      } catch (error) {
        console.log(error);
        body_error = {
          "Mistake in sight!": error,
        };
        res.status(500).send(body_error);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
};

exports.obtenerProduct = async (req, res) => {
  try {
    const productos = await Productoadd.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerProductosByID = async (req, res) => {
  try {
    let producto = await Productoadd.findById({ _id: req.params.id });

    if (!producto) {
      res.status(404).json({ msg: "no existe un producto" });
    }

    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};