const { join } = require("path");
const aviso = require('../model/avisoModel')

exports.obtenerTodosLosAvisos = async(req, res) => {
    try {
        let doctor = new aviso();
        let resultado = await doctor.listaDeAvisos();
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.obtenerUnAvisoPorId = async(req, res) => {
    try {
        let doctor = new aviso();
        let {id} = req.params;
        let resultado = await doctor.informacionAviso(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);

    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.guardarAviso = async(req, res) => {
    try {
        let doctor = new aviso();
        let resultado = await doctor.guardar(req.body);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.eliminarAviso = async(req, res) => {
    try {
        let doctor = new aviso();
        let {id} = req.params;
        let resultado = await doctor.eliminar(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
// exports.showAviso = async(req, res) => {
//     try {
//         res.sendFile(join(process.env.EXPRESS_STATIC, '/index.html'));
//     } catch (error) {
//         let err = JSON.parse(error.message);
//         if(err.status == 500) return res.status(err.status).json(err);
//     }
// }