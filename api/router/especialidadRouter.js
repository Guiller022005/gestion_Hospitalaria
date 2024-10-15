const especialidad = require('express').Router();
const especialidadV1 = require('../version/especialidadV1');

especialidad.use("/v1", especialidadV1);

module.exports = especialidad;