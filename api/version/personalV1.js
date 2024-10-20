// version
const express = require('express');
const personalController = require('../controller/personal.controller');
const limite = require('../limit/personalLimit');
const personal = express();

personal.get("/", limite.obtenerTodosLosPersonal,  personalController.obtenerPersonal);


module.exports = personal;