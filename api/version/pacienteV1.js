const express = require('express');
const pacienteController = require('../controller/pacienteController')
const paciente = express();

paciente.get("/", pacienteController.showPaciente);
paciente.get("/todos", pacienteController.obtenerTodosLosPacientes);
paciente.get("/:id", pacienteController.obtenerUnPacientesPorId);
paciente.post("/", express.json(), pacienteController.guardarPaciente);
paciente.delete("/:id", pacienteController.eliminarPaciente);

module.exports = paciente;