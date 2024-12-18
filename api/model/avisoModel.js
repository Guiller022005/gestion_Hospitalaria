// model
const Conexion = require('../helper/conexion')
class Aviso extends Conexion{
    constructor(){
        super();
    }
    async listaDeAvisos() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                `SELECT a.id, a.nombre AS aviso_nombre, a.descripcion, a.fecha, h.nombre AS hospital_nombre 
                FROM aviso a 
                JOIN hospital h ON a.hospital_fk = h.nit`
            );
            return {status: 200, message: "lista de avisos", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener todos los avisos", data: error}))
        }
    }
    async informacionAviso(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from aviso where id = ?',
                [id]
            );
            let [aviso] = results;
            return {status: 200, message: `informacion del aviso ${aviso.nombre}`, data: aviso};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al obtener la informacion del aviso ${id}`, data: error}))
        }
    }
    async guardar(hospital_fk, nombre, descripcion, fecha) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'INSERT INTO aviso (hospital_fk, nombre, descripcion, fecha) VALUES (?,?,?,?)',
                [hospital_fk, nombre, descripcion, fecha]
            );
            return { status: 200, message: `El aviso ${nombre} fue guardado exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al guardar la informacion del aviso ${nombre}`, error}));
        }
    }
    async eliminar(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'DELETE FROM aviso WHERE id = ? LIMIT 1',
                [id]
            );
            
            // Verifica si se eliminó alguna fila
            if (results.affectedRows === 0) {
                return { status: 404, message: `El aviso con id ${id} no fue encontrado.` };
            }
    
            return { status: 200, message: `El aviso con id ${id} fue eliminado exitosamente`, data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al eliminar el aviso ${id}`, data: error }));
        }
    }
}    
module.exports = Aviso;
