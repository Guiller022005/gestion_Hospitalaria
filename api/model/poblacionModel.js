// model
const Conexion = require('../helper/conexion')
class Poblacion extends Conexion{
    constructor(){
        super();
    }
    async listaPoblacion() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                `SELECT 
                    d.id AS DoctorID,  
                    d.nombre_completo AS Doctor,
                    p.cedula AS PacienteID,
                    CONCAT(p.nombre, ' ', p.apellido) AS PacienteNombre
                FROM 
                    poblacion pob
                JOIN 
                    doctor d ON pob.doctor_fk = d.id
                JOIN 
                    paciente p ON pob.paciente_fk = p.cedula
                ORDER BY 
                    d.id, p.cedula;`
            );
            return { status: 200, message: "Lista de la Población", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ 
                status: 500, 
                message: "Ocurrió un error al obtener la lista de la población", 
                data: error 
            }));
        }
    }
}
module.exports = Poblacion;