// version
const express = require('express');
const poblacionController = require('../controller/poblacion.controller');
const limite = require('../limit/poblacionLimit');
const poblacion = express();

poblacion.get("/",limite.obtenerTodosLosPoblacion, poblacionController.obtenerPoblacion);


module.exports = poblacion;