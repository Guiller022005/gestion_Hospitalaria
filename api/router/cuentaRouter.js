// router
const cuenta = require('express').Router();
const cuentaV1 = require('../version/cuentaV1');

cuenta.use("/v1", cuentaV1);

module.exports = cuenta;