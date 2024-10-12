const express = require('express');
const hospitalController = require('../controller/hospitalController')
const hospital = express();

hospital.get("/", hospitalController.showHospital);

module.exports = hospital;