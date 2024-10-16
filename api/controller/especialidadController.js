/*controller */
const { join } = require("path");
const Especialidad = require('../model/especialidadModel')

exports.obtenerEspecialidades = async (req, res) => {
    try {
        let especialidad = new Especialidad();
        let resultado = await especialidad.getEspecialidades();
        res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        res.status(err.status).json(err);
    }
};