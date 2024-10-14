const { join } = require("path");
const Cuenta = require('../model/cuentaModel')

exports.obtenerTodosLasCuentas = async(req, res) => {
    try {
        let cuenta = new Cuenta();
        let resultado = await cuenta.listaCuentas();
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.obtenerUnaCuentaPorId = async(req, res) => {
    try {
        let cuenta = new Cuenta();
        let {id} = req.params;
        let resultado = await cuenta.informacionCuenta(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);

    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.guardarCuenta = async(req, res) => {
    try {
        let cuenta = new Cuenta();
        let resultado = await cuenta.guardar(req.body);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.eliminarCuenta = async(req, res) => {
    try {
        let cuenta = new Cuenta();
        let {id} = req.params;
        let resultado = await cuenta.eliminar(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}

exports.showCuenta = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/views/account.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}