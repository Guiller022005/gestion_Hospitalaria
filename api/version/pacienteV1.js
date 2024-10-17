// version
const express = require('express');
const pacienteController = require('../controller/pacienteController');
const esquemas = require('../validator/pacienteValidator');
const paciente = express();

paciente.get("/", pacienteController.showPaciente);
paciente.get("/todos", pacienteController.obtenerTodosLosPacientes);
paciente.get("/:id", pacienteController.obtenerUnPacientesPorId);
paciente.post("/", express.json(), esquemas.formularioPaciente(), pacienteController.guardar);
paciente.delete("/:id", pacienteController.eliminarPaciente);

module.exports = paciente;