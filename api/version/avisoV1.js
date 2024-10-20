// version
const express = require('express');
const avisoController = require('../controller/avisoController');
const limite = require('../limit/avisoLimit');
const esquemas = require('../validator/avisoValidator');
const aviso = express();

// aviso.get("/", avisoController.showAviso);
aviso.get("/todos", limite.obtenerTodosLosAvisos,  avisoController.obtenerTodosLosAvisos);
aviso.get("/:id", avisoController.obtenerUnAvisoPorId);
aviso.post("/", limite.postAvisos, express.json(), esquemas.formularioAviso,  avisoController.guardarAviso);
aviso.delete("/:id", limite.deleteAvisos, avisoController.eliminarAviso);
module.exports = aviso;