// version
const express = require('express');
const cuentaController = require('../controller/cuentaController');
const limite = require('../limit/cuentaLimit');
const esquemas = require('../validator/cuentaValidator');
const cuenta = express();

cuenta.get("/", cuentaController.showCuenta);
cuenta.get("/todos", limite.obtenerTodosLasCuentas, cuentaController.obtenerTodosLasCuentas);
cuenta.get("/:id", cuentaController.obtenerUnaCuentaPorId);
cuenta.post("/", express.json(), esquemas.formularioCuenta, cuentaController.guardarCuenta);
cuenta.delete("/:id", cuentaController.eliminarCuenta);
module.exports = cuenta;