const { join } = require("path");
const hospitalModel = require('../model/hospitalModel')

exports.showHospital = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/views/hospital.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}