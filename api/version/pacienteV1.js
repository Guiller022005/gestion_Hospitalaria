const express = require('express');
const pacienteController = require('../controller/pacienteController')
const paciente = express();

paciente.get("/", pacienteController.showPaciente);

module.exports = paciente;