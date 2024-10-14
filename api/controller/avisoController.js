const { join } = require("path");
const Aviso = require('../model/avisoModel')

exports.obtenerTodosLosAvisos = async(req, res) => {
    try {
        let aviso = new Aviso();
        let resultado = await aviso.listaDeAvisos();
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.obtenerUnAvisoPorId = async(req, res) => {
    try {
        let aviso = new Aviso();
        let {id} = req.params;
        let resultado = await aviso.informacionAviso(id);
        if(resultado.status == 200) return res.status(resultado.status).json(resultado);

    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}
exports.guardarAviso = async(req, res) => {
    try {
        const { hospital_fk, nombre, descripcion, fecha } = req.body;

        if (!hospital_fk || !nombre || !descripcion || !fecha) {
            return res.status(400).json({
                status: 400,
                message: 'Todos los campos (hospital_fk, nombre, descripcion, fecha) son obligatorios.'
            });
        }

        // Convierte la fecha a formato compatible con MySQL (YYYY-MM-DD HH:MM:SS)
        const fechaSQL = new Date(fecha).toISOString().slice(0, 19).replace('T', ' ');

        let aviso = new Aviso();
        let resultado = await aviso.guardar(hospital_fk, nombre, descripcion, fechaSQL);

        if (resultado.status === 200) {
            return res.status(resultado.status).json(resultado);
        }
    } catch (error) {
        console.error(error);
        let err = JSON.parse(error.message);
        if (err.status === 500) {
            return res.status(err.status).json(err);
        }
    }
};

exports.eliminarAviso = async (req, res) => {
    try {
        let aviso = new Aviso();
        let { id } = req.params; // Asegúrate de que el id se pase correctamente en la ruta
        let resultado = await aviso.eliminar(id);

        if (resultado.status === 200) {
            return res.status(resultado.status).json(resultado);
        } else {
            return res.status(resultado.status).json(resultado); // Retorna la respuesta si no se encontró el aviso
        }
    } catch (error) {
        console.log(error);
        let err = JSON.parse(error.message);
        if (err.status === 500) {
            return res.status(err.status).json(err);
        }
    }
}

exports.showAviso = async(req, res) => {
    try {
        res.sendFile(join(process.env.EXPRESS_STATIC, '/index.html'));
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}