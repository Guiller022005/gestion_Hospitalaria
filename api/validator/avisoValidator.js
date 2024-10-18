const { body } = require("express-validator")
exports.formularioAviso = () => {
    return [
        body('hospital_fk').notEmpty().withMessage('El Id_hospital del Aviso no puede estar vacía'),
        body('nombre').notEmpty().withMessage('El nombre del Aviso no puede estar vacía'),
        body('descripcion').notEmpty().withMessage('La descripcion del Aviso no puede estar vacía'),
        body('fecha').notEmpty().withMessage('La fecha del Aviso no puede estar vacía'),
    ];
}