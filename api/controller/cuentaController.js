const { join } = require("path");
const cuentaModel = require('../model/cuentaModel')

exports.showCuenta = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/views/account.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}