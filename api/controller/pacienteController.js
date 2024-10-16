/*controller */
const { join } = require("path");
const Paciente = require('../model/pacienteModel')

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
exports.guardarPaciente = async(req, res) => {
    try {
        let paciente = new Paciente();
        let resultado = await paciente.guardar(req.body);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
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