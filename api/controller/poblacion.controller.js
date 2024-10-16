/*controller */
const { join } = require("path");
const Poblacion = require('../model/poblacionModel')

exports.obtenerPoblacion = async (req, res) => {
    try {
        let poblacion = new Poblacion();
        let resultado = await poblacion.listaPoblacion();
        res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        res.status(err.status).json(err);
    }
};