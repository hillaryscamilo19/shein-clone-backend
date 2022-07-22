const mongoose = require('mongoose');
const ProductaddSchema = mongoose.Schema({
    userId:{
        type: String,
        require: true
    },
    product:{
        type: String,
        require: true
    },
    PriceId:{
        type: Number,
        require: true
    },
    ImgProduct:{
        type: String,
        require: true
    },
    Titleproduct:{
        type: String,
        require:true
    }
})
module.exports = mongoose.model('Productadd',ProductaddSchema);