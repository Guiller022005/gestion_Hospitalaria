// router
const hospital = require('express').Router();
const hospitalV1 = require('../version/hospitalV1');

hospital.use("/v1", hospitalV1);

module.exports = hospital;