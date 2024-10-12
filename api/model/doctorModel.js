const Conexion = require('../helper/conexion')
class Doctor extends Conexion{
    constructor(){
        super();
    }
    async listaDoctores(){
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'SELECT * FROM doctor'
            );
            return {status: 200, message: "list of Doctors", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener todos los doctores", data: error}))
        }
    }
}
module.exports = Doctor;