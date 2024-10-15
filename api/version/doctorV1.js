const express = require('express');
const doctorController = require('../controller/doctorController');
const doctor = express();

doctor.get("/", doctorController.showDoctor);
doctor.get("/todos", doctorController.obtenerTodosLosDoctores);
doctor.get("/:id", doctorController.obtenerUnDoctorPorId);
doctor.post("/", express.json(), doctorController.guardarDoctor);
doctor.delete("/:id", doctorController.eliminarDoctor);

module.exports = doctor;