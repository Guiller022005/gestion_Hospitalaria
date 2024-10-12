const { join } = require("path");
const Doctor = require('../model/doctorModel')

exports.obtenerTodosLosDoctores = async(req, res) => {
    try {
        let doctor = new Doctor();
        let resultado = await doctor.listaDoctores();
        if(res.status == 200) return (await res).status(res.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}

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