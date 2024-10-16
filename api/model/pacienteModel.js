// model
const Conexion = require('../helper/conexion')
class Paciente extends Conexion{
    constructor(){
        super();
    }
    async listaPacientes() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                `SELECT 
                    d.cedula AS Cedula,
                    d.nombre AS Nombre,
                    d.apellido AS Apellido,
                    d.genero AS Genero,
                    d.fecha_nacimiento AS Fecha_nacimiento,
                    d.edad AS Edad,
                    d.estado AS Estado,
                    GROUP_CONCAT(CASE WHEN cd.tipo = 'Telefono' THEN cd.contacto END) AS Telefono,
                    GROUP_CONCAT(CASE WHEN cd.tipo = 'Celular' THEN cd.contacto END) AS Celular,
                    GROUP_CONCAT(CASE WHEN cd.tipo = 'Correo electronico' THEN cd.contacto END) AS Correo_Electronico
                FROM 
                    paciente d
                LEFT JOIN 
                    comunicacion_paciente cd ON d.Cedula = cd.paciente_fk
                GROUP BY 
                    d.Cedula, d.Nombre, d.Apellido, d.Genero, d.Fecha_nacimiento, d.Edad, d.Estado
                ORDER BY 
                    d.Cedula;`
            );
            return { status: 200, message: "Lista de Pacientes", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener todos los pacientes", data: error }));
        }
    }    
    async informacionPaciente(cedula) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from paciente where cedula = ?',
                [cedula]
            );
            let [paciente] = results;
            return {status: 200, message: `informacion del paciente ${paciente.nombre} ${paciente.apellido}`, data: paciente};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al obtener la informacion del paciente ${cedula}`, data: error}))
        }
    }
    async guardar({cedula, nombre, apellido, genero, fecha_nacimiento, edad, estado}) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'INSERT INTO paciente (cedula, nombre, apellido, genero, fecha_nacimiento, edad, estado) VALUES (?,?,?,?,?,?,?)',
                [cedula,nombre, apellido, genero, fecha_nacimiento, edad, estado]
            );
            // let [doctor] = results;
            return {status: 200, message: `El usuario ${nombre} fue guardado exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al guardar la informacion del doctor ${nombre}`, data: error}));
        }
    }
    async eliminar(cedula) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'DELETE FROM paciente WHERE cedula = ? LIMIT 1',
                [cedula]
            );
            // let [doctor] = results;
            return {status: 200, message: `El usuario ${nombre} fue eliminado exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al eliminar el paciente ${cedula}`, data: error}));
        }
    }
}
module.exports = Paciente;