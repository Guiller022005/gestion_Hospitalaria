const { join } = require("path");
const Doctor = require('../model/doctorModel')

exports.obtenerTodosLosDoctores = async(req, res) => {
    try {
        let doctor = new Doctor();
        let resultado = await doctor.listaDoctores();
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.obtenerUnDoctorPorId = async(req, res) => {
    try {
        let doctor = new Doctor();
        let {id} = req.params;
        let resultado = await doctor.informacionDoctor(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);

    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.guardarDoctor = async (req, res) => {
    try {
        let doctor = new Doctor();
        // Asegúrate de que req.body incluya los campos necesarios para guardar el doctor y el contacto
        let resultado = await doctor.guardarDoctorYContacto(req.body);
        
        if (resultado.status === 200) {
            return res.status(resultado.status).json(resultado);
        }
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if (err.status === 500) {
            return res.status(err.status).json(err);
        }
    }
};

exports.eliminarDoctor = async(req, res) => {
    try {
        let doctor = new Doctor();
        let {id} = req.params;
        let resultado = await doctor.eliminar(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
// exports.buscarDoctor = async(req, res) => {
//     try {
//         let doctor = new Doctor();
//         let {nombre, genero} = req.query;
//         let resultado = await doctor.informacionDoctor(nombre);
//         if(resultado.status == 200) return res.status(resultado.status).json(resultado);
        
//     } catch (error) {
//         console.log(error);
//         let err = JSON.parse(error.message);
//         if(err.status == 500) return res.status(err.status).json(err);
//     }
// }

exports.showDoctor = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/index.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}

// exports.login = async(req, res) => {
//     try {

//     } catch (error) {
//         let err = JSON.parse(error.message);
//         if(err.status == 500) return res.status(err.status).json(err);
//     }
// }