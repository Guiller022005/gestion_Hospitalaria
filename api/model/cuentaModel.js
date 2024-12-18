// model
const Conexion = require('../helper/conexion')
class Cuenta extends Conexion{
    constructor(){
        super();
    }
    async listaCuentas() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                `SELECT c.id, p.cedula, p.nombre AS nombre_paciente, h.nombre AS nombre_hospital, 
                        c.monto_total, c.fecha, c.motivo, c.estado_Pago
                 FROM cuenta c
                 JOIN paciente p ON c.paciente_fk = p.cedula
                 JOIN hospital h ON c.hospital_fk = h.nit`
            );
            return { status: 200, message: "Lista de cuentas", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener las cuentas", data: error }));
        }
    }    
    async informacionCuenta(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from cuenta where id = ?',
                [id]
            );
            let [cuenta] = results;
            return {status: 200, message: `informacion de la cuenta ${cuenta.paciente_fk}`, data: cuenta};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al obtener la informacion del cuenta ${id}`, data: error}))
        }
    }
    async guardar({paciente_fk, hospital_fk, monto_total, fecha, motivo, estado_Pago }) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'INSERT INTO cuenta (paciente_fk, hospital_fk, monto_total, fecha, motivo, estado_Pago) VALUES (?,?,?,?,?,?)',
                [paciente_fk, hospital_fk, monto_total, fecha, motivo, estado_Pago]
            );
            // let [doctor] = results;
            return {status: 200, message: `La cuenta ${paciente_fk} fue guardada exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al guardar la informacion de la cuenta `, data: error}));
        }
    }
    async eliminar(nit) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'DELETE FROM cuenta WHERE id = ? LIMIT 1',
                [id]
            );
             // Verifica si se eliminó alguna fila
             if (results.affectedRows === 0) {
                return { status: 404, message: `La cuenta con id ${paciente_fk} no fue encontrado.` };
            }
            return {status: 200, message: `La cuenta ${id} fue eliminada exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al eliminar la cuenta ${id}`, data: error}));
        }
    }
}
module.exports = Cuenta;