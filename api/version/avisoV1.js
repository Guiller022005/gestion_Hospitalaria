// version
const express = require('express');
const avisoController = require('../controller/avisoController');
const limite = require('../limit/avisoLimit');
const esquemas = require('../validator/avisoValidator');
const aviso = express();

// aviso.get("/", avisoController.showAviso);
aviso.get("/todos", limite.obtenerTodosLosAvisos,  avisoController.obtenerTodosLosAvisos);
aviso.get("/:id", avisoController.obtenerUnAvisoPorId);
aviso.post("/", express.json(), esquemas.formularioAviso,  avisoController.guardarAviso);
aviso.delete("/:id", avisoController.eliminarAviso);
module.exports = aviso;