INSERT INTO paciente (cedula, nombre, apellido, genero, fecha_nacimiento, edad, estado) VALUES
(1001,'Juan','Pérez','Masculino','1980-05-14',44,'Activo'),
(1002,'Ana','García','Femenino','1992-09-30',32,'Inactivo'),
(1003,'Luis','Rodríguez','Masculino','1987-11-22',37,'Activo'),
(1004,'Marta','López','Femenino','1975-03-10',49,'Inactivo'),
(1005,'Carlos','Martínez','Masculino','1995-12-15',28,'Activo'),
(1006,'Lucía','Gómez','Femenino','1985-08-08',39,'Inactivo'),
(1007,'Pedro','Díaz','Masculino','1990-06-17',34,'Activo'),
(1008,'Clara','Torres','Femenino','1982-07-23',42,'Inactivo'),
(1009,'David','Ramírez','Masculino','1988-02-19',36,'Activo'),
(1010,'Sofía','Fernández','Femenino','1993-04-05',31,'Inactivo');


INSERT INTO comunicacion_paciente (paciente_fk, tipo, contacto) VALUES
(1001, 'Telefono', '555-1234'),
(1002, 'Celular', '312-5678'),
(1003, 'Correo electronico', 'luis.rodriguez@mail.com'),
(1004, 'Telefono', '555-7890'),
(1005, 'Celular', '300-2468'),
(1006, 'Correo electronico', 'lucia.gomez@mail.com'),
(1007, 'Telefono', '555-1357'),
(1008, 'Celular', '315-9753'),
(1009, 'Correo electronico', 'david.ramirez@mail.com'),
(1010, 'Telefono', '555-7531');


INSERT INTO historial_medico (paciente_fk, descripcion) VALUES
(1001, 'Alergia a penicilina. Operación de rodilla en 2015.'),
(1002, 'Asma desde la infancia. Sin complicaciones recientes.'),
(1003, 'Fractura de clavícula en 2018. En recuperación.'),
(1004, 'Hipertensión diagnosticada en 2010. En tratamiento.'),
(1005, 'Cirugía de apendicitis en 2020. Sin complicaciones.'),
(1006, 'Diabetes tipo 2. En tratamiento desde 2015.'),
(1007, 'Problemas de visión. Uso de lentes desde 2008.'),
(1008, 'Alergia a polen y ácaros. Tratamiento con antihistamínicos.'),
(1009, 'Hernia operada en 2019. Completa recuperación.'),
(1010, 'Obesidad leve. Siguiendo dieta desde 2021.');


INSERT INTO hospital (nit, nombre, direccion) VALUES
(9001, 'Hospital Central', 'Calle 123 #45-67, Ciudad'),
(9002, 'Clínica San Rafael', 'Av. Principal #22-34, Ciudad'),
(9003, 'Hospital del Norte', 'Calle 78 #15-90, Ciudad'),
(9004, 'Clínica del Sur', 'Carrera 10 #50-60, Ciudad'),
(9005, 'Hospital Universitario', 'Calle 33 #70-89, Ciudad'),
(9006, 'Clínica de Especialidades', 'Avenida 9 #45-32, Ciudad'),
(9007, 'Hospital San José', 'Calle 50 #30-29, Ciudad'),
(9008, 'Clínica Médica Familiar', 'Carrera 20 #15-25, Ciudad'),
(9009, 'Hospital Infantil', 'Calle 5 #10-12, Ciudad'),
(9010, 'Clínica de la Mujer', 'Avenida 1 #23-45, Ciudad');


INSERT INTO aviso (hospital_fk, nombre, descripcion, fecha) VALUES
(9001, 'Jornada de vacunación', 'Vacunación gratuita para mayores de 60 años', '2024-05-12 08:00:00'),
(9002, 'Nueva especialidad en cardiología', 'Se inaugura la nueva unidad de cardiología', '2024-03-15 10:00:00'),
(9003, 'Donación de sangre', 'Campaña de donación de sangre abierta al público', '2024-07-22 09:00:00'),
(9004, 'Día de la salud', 'Consultas médicas gratuitas para toda la familia', '2024-02-10 12:00:00'),
(9005, 'Charlas de nutrición', 'Conferencias gratuitas sobre nutrición y salud', '2024-06-18 14:00:00'),
(9006, 'Taller de primeros auxilios', 'Capacitación en primeros auxilios para la comunidad', '2024-04-25 11:00:00'),
(9007, 'Programa de bienestar mental', 'Asesoramiento gratuito en salud mental', '2024-08-09 15:00:00'),
(9008, 'Curso para madres primerizas', 'Charlas y orientación para madres recientes', '2024-01-14 16:00:00'),
(9009, 'Semana de la salud infantil', 'Consultas pediátricas gratuitas', '2024-09-30 10:00:00'),
(9010, 'Taller de prevención del cáncer', 'Prevención y diagnóstico temprano del cáncer', '2024-10-05 17:00:00');


INSERT INTO cuenta (paciente_fk, hospital_fk, monto_total, fecha, motivo, estado_Pago) VALUES
(1001, 9001, 1500.00, '2024-01-15 09:30:00', 'Cirugía de rodilla', 'Cancelado'),
(1002, 9002, 500.00, '2024-03-20 14:45:00', 'Consulta de neumología', 'Pendiente'),
(1003, 9003, 1200.00, '2024-04-10 11:20:00', 'Operación de clavícula', 'Cancelado'),
(1004, 9004, 800.00, '2024-02-22 16:10:00', 'Tratamiento hipertensión', 'Pendiente'),
(1005, 9005, 450.00, '2024-06-05 10:30:00', 'Consulta general', 'Cancelado'),
(1006, 9006, 700.00, '2024-07-18 08:50:00', 'Control de diabetes', 'Pendiente'),
(1007, 9007, 300.00, '2024-08-23 13:40:00', 'Revisión de lentes', 'Cancelado'),
(1008, 9008, 650.00, '2024-09-12 15:00:00', 'Consulta alergia', 'Pendiente'),
(1009, 9009, 2000.00, '2024-05-30 11:00:00', 'Cirugía de hernia', 'Cancelado'),
(1010, 9010, 900.00, '2024-10-01 17:30:00', 'Control de obesidad', 'Pendiente');


INSERT INTO comunicacion_hospital (hospital_fk, tipo, contacto) VALUES
(9001, 'Telefono', '555-1001'),
(9002, 'Celular', '311-1234'),
(9003, 'Correo electronico', 'contacto@hospitalnorte.com'),
(9004, 'Telefono', '555-2002'),
(9005, 'Celular', '312-5679'),
(9006, 'Correo electronico', 'contacto@clinicaespecialidades.com'),
(9007, 'Telefono', '555-3003'),
(9008, 'Celular', '313-7890'),
(9009, 'Correo electronico', 'contacto@hospitalinfantil.com'),
(9010, 'Telefono', '555-4004');


INSERT INTO especialidad (nombre) VALUES
('Cardiología'),
('Pediatría'),
('Ginecología'),
('Neurología'),
('Ortopedia'),
('Oncología'),
('Dermatología'),
('Oftalmología'),
('Psiquiatría'),
('Gastroenterología');

INSERT INTO doctor (nombre_completo, genero, especialidad_fk, fecha_nacimiento, estado) VALUES
('Dr. José Martínez','Masculino',1,'1975-04-12','Activo'),
('Dra. Laura Gutiérrez','Femenino',2,'1980-09-25','Suspendido'),
('Dr. Carlos Pérez','Masculino',3,'1982-06-11','Activo'),
('Dra. Ana Torres','Femenino',4,'1977-03-30','Suspendido'),
('Dr. Pablo Ruiz','Masculino',5,'1979-11-08','Incapacitado'),
('Dra. Carolina Salazar','Femenino',6,'1985-12-02','Activo'),
('Dr. Miguel Castro','Masculino',7,'1983-05-18','Incapacitado'),
('Dra. Patricia Soto','Femenino',8,'1981-01-14','Vacaciones'),
('Dr. Luis Mendoza','Masculino',9,'1976-08-22','Suspendido'),
('Dra. Sofía Morales','Femenino',10,'1984-10-05','Vacaciones');

INSERT INTO comunicacion_doctor (doctor_fk, tipo, contacto) VALUES
(1, 'Telefono', '555-5001'),
(2, 'Celular', '311-7895'),
(3, 'Correo electronico', 'dr.carlos.perez@mail.com'),
(4, 'Telefono', '555-6002'),
(5, 'Celular', '312-6543'),
(6, 'Correo electronico', 'dr.carolina.salazar@mail.com'),
(7, 'Telefono', '555-7003'),
(8, 'Celular', '313-8901'),
(9, 'Correo electronico', 'dr.luis.mendoza@mail.com'),
(10, 'Telefono', '555-8004');


INSERT INTO personal (hospital_fk, doctor_fk) VALUES
(9001, 1),
(9002, 2),
(9003, 3),
(9004, 4),
(9005, 5),
(9006, 6),
(9007, 7),
(9008, 8),
(9009, 9),
(9010, 10);


INSERT INTO poblacion (doctor_fk, paciente_fk) VALUES
(1, 1001),
(2, 1002),
(3, 1003),
(4, 1004),
(5, 1005),
(6, 1006),
(7, 1007),
(8, 1008),
(9, 1009),
(10, 1010);