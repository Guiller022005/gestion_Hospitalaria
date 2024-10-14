const Conexion = require('../helper/conexion')
class Cuenta extends Conexion{
    constructor(){
        super();
    }
    async listaCuentas() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from cuenta'
            );
            return {status: 200, message: "lista de cuentas", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener todos las cuentas", data: error}))
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
            return {status: 200, message: `informacion de la cuenta ${id}`, data: cuenta};
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
    async eliminar(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'DELETE FROM cuenta WHERE id = ? LIMIT 1',
                [id]
            );
            // let [doctor] = results;
            return {status: 200, message: `La cuenta ${id} fue eliminada exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al eliminar la cuenta ${id}`, data: error}));
        }
    }
}
module.exports = Cuenta;