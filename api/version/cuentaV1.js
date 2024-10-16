// version
const express = require('express');
const cuentaController = require('../controller/cuentaController');
const cuenta = express();

cuenta.get("/", cuentaController.showCuenta);
cuenta.get("/todos", cuentaController.obtenerTodosLasCuentas);
cuenta.get("/:id", cuentaController.obtenerUnaCuentaPorId);
cuenta.post("/", express.json(), cuentaController.guardarCuenta);
cuenta.delete("/:id", cuentaController.eliminarCuenta);
module.exports = cuenta;