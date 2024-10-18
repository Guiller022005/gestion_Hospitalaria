// version
const express = require('express');
const hospitalController = require('../controller/hospitalController');
const limite = require('../limit/hospitalLimit');
const hospital = express();

hospital.get("/", hospitalController.showHospital);
hospital.get("/todos", limite.obtenerTodosLosHospitales, hospitalController.obtenerTodosLosHospitales);
hospital.get("/:id", hospitalController.obtenerUnHospitalPorId);
hospital.post("/", express.json(), hospitalController.guardarHospital);
hospital.delete("/:id", hospitalController.eliminarHospital);

module.exports = hospital;