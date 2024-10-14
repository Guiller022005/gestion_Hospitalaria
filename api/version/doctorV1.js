const express = require('express');
const doctorController = require('../controller/doctorController');
const doctor = express();

doctor.get("/", doctorController.showDoctor);
doctor.get("/todos", doctorController.obtenerTodosLosDoctores);
doctor.post("/contacto", doctorController.guardarContacto);
doctor.get("/:id", doctorController.obtenerUnDoctorPorId);
// doctor.get("/buscar", doctorController.buscarDoctor);
doctor.post("/", express.json(), doctorController.guardarDoctor);
doctor.delete("/:id", doctorController.eliminarDoctor);

module.exports = doctor;