const { join } = require("path");
const doctorModel = require('../model/doctorModel')

exports.showDoctor = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/index.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}

exports.login = async(req, res) => {
    try {

    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}