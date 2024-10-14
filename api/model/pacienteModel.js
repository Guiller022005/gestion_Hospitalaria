const Conexion = require('../helper/conexion')
class Paciente extends Conexion{
    constructor(){
        super();
    }
    async listaPacientes() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from paciente'
            );
            return {status: 200, message: "Lista de Pacientes", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener todos los pacientes", data: error}))
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