const Conexion = require('../helper/conexion')
class Doctor extends Conexion{
    constructor(){
        super();
    }
    async listaDoctores() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from doctor'
            );
            return {status: 200, message: "list of Doctors", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener todos los doctores", data: error}))
        }
    }
    async informacionDoctor(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from doctor where id = ?',
                [id]
            );
            let [doctor] = results;
            return {status: 200, message: `informacion del doctor ${doctor.nombre_completo}`, data: doctor};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al obtener la informacion del doctor ${id}`, data: error}))
        }
    }
    async guardar({nombre, genero, especialidad, fecha_nacimiento, estado}) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'INSERT INTO doctor (nombre_completo, genero, especialidad_fk, fecha_nacimiento, estado) VALUES (?,?,?,?,?)',
                [nombre, genero, especialidad, fecha_nacimiento, estado]
            );
            // let [doctor] = results;
            return {status: 200, message: `El usuario ${nombre} fue guardado exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al guardar la informacion del doctor ${nombre}`, data: error}));
        }
    }
    async eliminar(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'DELETE FROM doctor WHERE id = ? LIMIT 1',
                [id]
            );
            // let [doctor] = results;
            return {status: 200, message: `El usuario ${id} fue eliminado exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al eliminar el doctor ${id}`, data: error}));
        }
    }
}
module.exports = Doctor;