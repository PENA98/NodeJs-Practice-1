//Importando modulos de express
const express = require('express')
// IMportar las rutas disponibles
const routes = require('./routes')

//creando app de express
const app = express()


app.use('/', routes())

var server = app.listen(9888, function () {
    console.log('Node server is running..');
});
// app.listen(9888)
// console.log('Holas')
