const { body } = require("express-validator")
exports.formularioCuenta = () => {
    return [
        body('paciente_fk').notEmpty().withMessage('El Id_paciente tiene no puede estar vacía'),
        body('hospital_fk').notEmpty().withMessage('El Id_hsopital no puede estar vacía'),
        body('monto_total').notEmpty().withMessage('El monto_total del paciente no puede estar vacía'),
        body('fecha').notEmpty().withMessage('La fecha de la cuenta del paciente no puede estar vacía'),
        body('motivo').notEmpty().withMessage('El motivo de la cuenta no puede estar vacía'),
        body('estado_Pago').notEmpty().custom((value)=>{
            if (value && !['Cancelado', 'Pendiente'].includes(value)) {
                throw new Error('El dato no esta permitido');
            }
            return true;
        })
    ];
}