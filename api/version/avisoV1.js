const express = require('express');
const avisoController = require('../controller/avisoController')
const aviso = express();

aviso.get("/", avisoController.showAviso);

module.exports = aviso;