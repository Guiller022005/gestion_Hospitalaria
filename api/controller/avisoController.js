const { join } = require("path");
const avisoModel = require('../model/avisoModel')

exports.showAviso = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/views/warning.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}