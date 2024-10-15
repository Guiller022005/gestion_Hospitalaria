const Conexion = require('../helper/conexion')
class Personal extends Conexion{
    constructor(){
        super();
    }
    async listaPersonal() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                `SELECT 
                d.id AS DoctorID,  
                d.nombre_completo AS Doctor,
                d.estado AS Estado,
                h.nit AS HospitalID,
                h.nombre AS Hospital,
                h.direccion AS Direccion
            FROM 
                personal p
            JOIN 
                doctor d ON p.doctor_fk = d.id
            JOIN 
                hospital h ON p.hospital_fk = h.nit
            ORDER BY 
                d.id;`
            );
            return { status: 200, message: "lista del Personal", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ 
                status: 500, 
                message: "Ocurrió un error al obtener todos los personales", 
                data: error 
            }));
        }
    }
}
module.exports = Personal;