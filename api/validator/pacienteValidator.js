const { body } = require("express-validator")
exports.formularioPaciente = () => {
    return [
        body('cedula').notEmpty().withMessage('La cedula tiene no puede estar vacía'),
        body('nombre').notEmpty().withMessage('El nombre del paciente no puede estar vacía'),
        body('apellido').notEmpty().withMessage('El apellido del paciente no puede estar vacía'),
        body('genero').notEmpty().withMessage('El genero del paciente no puede estar vacía'),
        body('fecha_nacimiento').notEmpty().withMessage('La fecha del paciente no puede estar vacía'),
        body('edad').notEmpty().withMessage('El edad del paciente no puede estar vacía'),
        body('estado').notEmpty().custom((value)=>{
            if (value && !['Activo', 'Inactivo'].includes(value)) {
                throw new Error('El dato no esta permitido');
            }
            return true;
        })
    ];
}