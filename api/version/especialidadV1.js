// version
const express = require('express');
const especialidadController = require('../controller/especialidadController');
const limite = require('../limit/especialidadLimit');
const especialidad = express();

especialidad.get("/todos", limite.obtenerTodosLasEspecialidades, especialidadController.obtenerEspecialidades);


module.exports = especialidad;