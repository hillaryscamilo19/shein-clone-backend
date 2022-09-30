const userModel = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { email, password, name, lastName } = req.body;
    const isUser = await userModel.findOne({email});
    
    if(isUser){
      return res.status(409).send("USER_ALREADY_REGISTER")
    }
    //Creamos nuevo usuario.
    const auth = new userModel({
      email,
      password,
      name,
      lastName
    });
    await auth.save();
    res.send(auth);
  } catch (error) {
    res.status(500).send("hubo un error");
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const { email, password } = req.body;
    let auth = await authUser.findById(req.params.id);

    if (! auth) {
      res.status(404).json({ msg: "no existe un producto" });
    }
    auth.email = email;
    auth.password =password;

    auth = await  authUser.findOneAndUpdate(
      { _id: req.params.id },
      authUser,
      { new: true }
    );
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
