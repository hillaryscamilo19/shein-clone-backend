const Productoadd = require ("../models/productadd")

  exports.Addproduct = async (req, res) => {
    try {
        let producto;
        //Creamos nuestro producto
        producto = new Productoadd(req.body);
    
        await producto.save();
        res.send(producto);
      } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error", error);
      }
  };

  exports.eliminarProduct = async (req, res) => {
    // const myID = req.params.id

    try{
      let product = await Product.findById(req.params.id);
      if(!product){
        res.status(404).json({ msg: 'product not found'});
      }
      await Product.findByIdAndRemove({_id: req.params.id})
      res.json({ msg: 'product removed successfully'});
    }
    catch (error){
      body_error={
        "Mistake in sight!":error
      }
      res.status(500).send(body_error);
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


