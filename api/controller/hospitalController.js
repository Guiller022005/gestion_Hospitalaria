const { join } = require("path");
const Hospital = require('../model/hospitalModel')

exports.obtenerTodosLosHospitales = async(req, res) => {
    try {
        let hospital = new Hospital();
        let resultado = await hospital.listaHospital();
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.obtenerUnHospitalPorId = async(req, res) => {
    try {
        let hospital = new Hospital();
        let {id} = req.params;
        let resultado = await hospital.informacionHospital(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);

    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.guardarHospital = async(req, res) => {
    try {
        let hospital = new Hospital();
        let resultado = await hospital.guardar(req.body);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.eliminarHospital = async(req, res) => {
    try {
        let hospital = new Hospital();
        let {id} = req.params;
        let resultado = await hospital.eliminar(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.showHospital = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/views/hospital.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}