const express = require('express');
const poblacionController = require('../controller/poblacion.controller');
const poblacion = express();

poblacion.get("/", poblacionController.obtenerPoblacion);


module.exports = poblacion;