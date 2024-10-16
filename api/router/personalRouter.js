// router
const personal = require('express').Router();
const personalV1 = require('../version/personalV1');

personal.use("/v1", personalV1);

module.exports = personal;