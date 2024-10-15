const express = require('express');
const personalController = require('../controller/personal.controller');
const personal = express();

personal.get("/", personalController.obtenerPersonal);


module.exports = personal;