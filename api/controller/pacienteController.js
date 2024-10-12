const { join } = require("path");
const pacienteModel = require('../model/pacienteModel')

exports.showPaciente = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/views/patients.html'));
    }catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}