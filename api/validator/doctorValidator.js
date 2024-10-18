const { body } = require("express-validator")
exports.formularioDoctor = () => {
    return [
        body('nombre_completo').notEmpty().withMessage('El nombre del doctor no puede estar vacía'),
        body('genero').notEmpty().withMessage('El genero del doctor no puede estar vacía'),
        body('especialidad_fk').notEmpty().withMessage('La especialidad del doctor no puede estar vacía'),
        body('fecha_nacimiento').notEmpty().withMessage('La fecha de nacimiento del doctor no puede estar vacía'),
        body('estado').notEmpty().custom((value)=>{
            if (value && !['Activo', 'Inactivo', 'Suspendido', 'Incapacitado', 'Vacaciones'].includes(value)) {
                throw new Error('El dato no esta permitido');
            }
            return true;
        })
    ];
}