// router
const paciente = require('express').Router();
const pacienteV1 = require('../version/pacienteV1');

paciente.use("/v1", pacienteV1);

module.exports = paciente;