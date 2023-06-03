// Inicio modulo Express

const bodyParser = require('body-parser');
const express = require ('express');
const app = express();

//Body Parser
app.use(bodyParser.json());

// Rutas
app.get('/',(req, res) => {
  res.send('prueba 1 respuesta del servidor'); 
});

// Conexion a la Database 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Tathan1191:Alana2022.@cluster0.chd6aiz.mongodb.net/<nombre-base-datos>',
{ useNewUrlParser: true },() => {
  console.log('Se ha establecido la conexión de manera exitosa!');  
});

// Ejecucion del servidor 
app.listen(10000);
