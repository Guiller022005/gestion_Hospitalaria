const Conexion = require('../helper/conexion')
class Doctor extends Conexion{
    constructor(){
        super();
    }
    async listaDoctores() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                `SELECT 
                    d.id AS DoctorID,  
                    d.nombre_completo AS Doctor,
                    d.genero AS Genero,
                    d.fecha_nacimiento AS Fecha_Nacimiento,
                    d.estado AS Estado,
                    e.nombre AS Especialidad,
                    GROUP_CONCAT(CASE WHEN cd.tipo = 'Telefono' THEN cd.contacto END) AS Telefono,
                    GROUP_CONCAT(CASE WHEN cd.tipo = 'Celular' THEN cd.contacto END) AS Celular,
                    GROUP_CONCAT(CASE WHEN cd.tipo = 'Correo electronico' THEN cd.contacto END) AS Correo_Electronico
                FROM 
                    doctor d
                LEFT JOIN 
                    comunicacion_doctor cd ON d.id = cd.doctor_fk
                LEFT JOIN 
                    especialidad e ON d.especialidad_fk = e.id
                GROUP BY 
                    d.id, d.nombre_completo, d.genero, d.fecha_nacimiento, d.estado, e.nombre
                ORDER BY 
                    d.id;  -- Ordenar por el ID del doctor`
            );
            return { status: 200, message: "list of Doctors", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ 
                status: 500, 
                message: "Ocurrió un error al obtener todos los doctores", 
                data: error 
            }));
        }
    }    
    async listaContactos() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'select * from comunicacion_doctor'
            );
            return {status: 200, message: "list of contacts", data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrio un error al obtener los contactos de los doctores", data: error}))
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
    async guardarContactoDoctor({doctor_fk, tipo, contacto}) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'INSERT INTO comunicacion_doctor (doctor_fk, tipo, contacto) VALUES  (?,?,?)',
                [doctor_fk, tipo, contacto]
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
            if (results.affectedRows === 0) {
                return { status: 404, message: `La cuenta con id ${paciente_fk} no fue encontrado.` };
            }
            return {status: 200, message: `El usuario ${id} fue eliminado exitosamente`, data: results};
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrio un error al eliminar el doctor ${id}`, data: error}));
        }
    }
}
module.exports = Doctor;