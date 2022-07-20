const mongoose = require('mongoose');
const ProductoShema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    object:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    },
    img:{
        type: String
    }

})


module.exports = mongoose.model('Producto',ProductoShema);

