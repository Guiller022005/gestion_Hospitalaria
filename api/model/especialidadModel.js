// model
const Conexion = require('../helper/conexion')
class Especialidad extends Conexion{
    constructor(){
        super();
    }
    async getEspecialidades() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from especialidad;'
            );
            return {status: 200, message: "lista de especialidades", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener todos las especialidades", data: error}))
        }
    }
}
module.exports = Especialidad;