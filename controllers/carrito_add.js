const Productoadd = require("../models/productadd");
const Producto = require("../models/products");
exports.Addproduct = async (req, res) => {
  const nueba = {
    userId: req.body._id,
    Titleproduct: req.body.title,
    PriceId: req.body.price,
    ImgProduct: req.body.img,
    object: req.body.object,
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
    let product = await Productoadd.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "product not found" });
    }
    await Productoadd.findByIdAndRemove({ _id: req.params.id });
    return res.json({ msg: "product removed successfully" });
  } catch (error) {
    body_error = {
      "Mistake in sight!": error,
    };
    res.status(500).json({ "erroe 2": body_error });
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
