// router
const aviso = require('express').Router();
const avisoV1 = require('../version/avisoV1');

aviso.use("/v1", avisoV1);

module.exports = aviso;