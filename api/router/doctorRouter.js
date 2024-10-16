// router
const doctor = require('express').Router();
const doctorV1 = require('../version/doctorV1');

doctor.use("/v1", doctorV1);

module.exports = doctor;