const { join } = require("path");
const Personal = require('../model/personalModel')

exports.obtenerPersonal = async (req, res) => {
    try {
        let personal = new Personal();
        let resultado = await personal.listaPersonal();
        res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        res.status(err.status).json(err);
    }
};