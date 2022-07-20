const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//create services
const app = express();

//conectamos a la BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
 
//definir rutas principal
    app.get('/',(req, res) => {
        res.send('hola mundooo🧬✔')
    })

app.listen(4000,() =>{
    console.log('el servidor esta corriendo');
})