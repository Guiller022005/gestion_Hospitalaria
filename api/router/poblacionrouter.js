// router
const poblacion = require('express').Router();
const poblacionV1 = require('../version/poblacionV1');

poblacion.use("/v1", poblacionV1);

module.exports = poblacion;