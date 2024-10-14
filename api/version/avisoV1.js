const express = require('express');
const avisoController = require('../controller/avisoController')
const aviso = express();

// aviso.get("/", avisoController.showAviso);
aviso.get("/todos", avisoController.obtenerTodosLosAvisos);
aviso.get("/:id", avisoController.obtenerUnAvisoPorId);
aviso.post("/", express.json(), avisoController.guardarAviso);
aviso.delete("/:id", avisoController.eliminarAviso);
module.exports = aviso;