const express = require('express');
const doctorController = require('../controller/doctorController');
const doctor = express();

doctor.get("/", doctorController.showDoctor);
doctor.get("/todos", doctorController.obtenerTodosLosDoctores);
doctor.post("/", express.json(), doctorController.login)

module.exports = doctor;