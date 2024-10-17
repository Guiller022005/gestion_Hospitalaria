/*controller */
const { join } = require("path");
const Paciente = require('../model/pacienteModel');
const { validationResult } = require("express-validator");

exports.obtenerTodosLosPacientes = async(req, res) => {
    try {
        let paciente = new Paciente();
        let resultado = await paciente.listaPacientes();
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.obtenerUnPacientesPorId = async(req, res) => {
    try {
        let paciente = new Paciente();
        let {id} = req.params;
        let resultado = await paciente.informacionPaciente(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);

    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.guardar = async(req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ status:400, message:"Error en la validacion de datos de entrada", data: errors.array()});
        res.status(200).json(req.body);
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.eliminarPaciente = async(req, res) => {
    try {
        let paciente = new Paciente();
        let {id} = req.params;
        let resultado = await paciente.eliminar(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.showPaciente = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/views/patients.html'));
    }catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}