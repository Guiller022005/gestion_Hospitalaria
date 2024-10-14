const Conexion = require('../helper/conexion')
class Hospital extends Conexion{
    constructor(){
        super();
    }
    async listaHospital() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from hospital'
            );
            return {status: 200, message: "lista de Hospitales", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener todos los Hospitales", data: error}))
        }
    }
    async informacionHospital(nit) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from hospital where nit = ?',
                [nit]
            );
            let [hospital] = results;
            return {status: 200, message: `informacion del Hospital ${hospital.nombre}`, data: hospital};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al obtener la informacion del Hospital ${nit}`, data: error}))
        }
    }
    async guardar({nit, nombre, direccion}) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'INSERT INTO hospital (nit, nombre, direccion) VALUES (?,?,?)',
                [nit, nombre, direccion]
            );
            // let [doctor] = results;
            return {status: 200, message: `El Hospital ${nit} fue guardada exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al guardar la informacion del Hospital `, data: error}));
        }
    }
    async eliminar(nit) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'DELETE FROM hospital WHERE nit = ? LIMIT 1',
                [nit]
            );
            // Verifica si se eliminó alguna fila
            if (results.affectedRows === 0) {
                return { status: 404, message: `El Hospital con nit ${nit} no fue encontrado.` };
            }
            return {status: 200, message: `El Hospital ${nit} fue eliminado exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al eliminar el Hospital ${id}`, data: error}));
        }
    }
}
module.exports = Hospital;