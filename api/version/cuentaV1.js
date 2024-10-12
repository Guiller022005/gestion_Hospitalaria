const express = require('express');
const cuentaController = require('../controller/cuentaController');
const cuenta = express();

cuenta.get("/", cuentaController.showCuenta);

module.exports = cuenta;