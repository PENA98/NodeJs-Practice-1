//Importando modulos de express
const express = require('express')
// IMportar las rutas disponibles
const routes = require('./routes')

const path = require('path')

//creando app de express
const app = express()

// Desde dónde se cargan los archivos estáticos
app.use(express.static('public'));

// Habilitar Pug como nuestro Template Engine
app.set('view engine', 'pug');

// Añadir la carpeta (ruta) que contiene las View (vistas)
app.set('views', path.join(__dirname, './views'));

app.use('/', routes())

var server = app.listen(9888, function () {
    console.log('Node server is running..');
});
// app.listen(9888)
// console.log('Holas')
