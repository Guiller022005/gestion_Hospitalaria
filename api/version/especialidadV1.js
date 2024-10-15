const express = require('express');
const especialidadController = require('../controller/especialidadController');
const especialidad = express();

especialidad.get("/", especialidadController.obtenerEspecialidades);


module.exports = especialidad;