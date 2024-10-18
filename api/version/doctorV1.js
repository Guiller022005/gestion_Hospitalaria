// version
const express = require('express');
const doctorController = require('../controller/doctorController');
const limite = require('../limit/doctorLimit');
const esquemas = require('../validator/doctorValidator');
const doctor = express();

doctor.get("/", doctorController.showDoctor);
doctor.get("/todos", limite.obtenerTodosLosDoctores, doctorController.obtenerTodosLosDoctores);
doctor.get("/:id", doctorController.obtenerUnDoctorPorId);
doctor.post("/", express.json(), esquemas.formularioDoctor, doctorController.guardarDoctor);
doctor.delete("/:id", doctorController.eliminarDoctor);

module.exports = doctor;