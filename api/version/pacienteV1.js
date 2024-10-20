// version
const express = require('express');
const pacienteController = require('../controller/pacienteController');
const limite = require('../limit/pacienteLimit');
const esquemas = require('../validator/pacienteValidator');
const paciente = express();

paciente.get("/", pacienteController.showPaciente);
paciente.get("/todos", limite.obtenerTodosLosPacientes, pacienteController.obtenerTodosLosPacientes);
paciente.get("/:id", pacienteController.obtenerUnPacientesPorId);
paciente.post("/", limite.postPacientes, express.json(), esquemas.formularioPaciente(), pacienteController.guardar);
paciente.delete("/:id", limite.deletePacientes, pacienteController.eliminarPaciente);

module.exports = paciente;