CREATE SCHEMA hospital DEFAULT CHARACTER SET utf8;
USE hospital;

CREATE TABLE paciente(
    cedula INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    genero VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    edad INT NOT NULL,
    estado ENUM("Activo", "Inactivo") NOT NULL,
    CONSTRAINT PK_cedula PRIMARY KEY(cedula)
);
CREATE INDEX ID_nombre_completo ON paciente (nombre, apellido);

CREATE TABLE comunicacion_paciente(
    paciente_fk INT NOT NULL,
    tipo ENUM('Telefono', 'Celular', 'Correo electronico') NOT NULL,
    contacto VARCHAR(50) NOT NULL,
    CONSTRAINT UC_contacto_paciente UNIQUE (contacto),
    CONSTRAINT FK_comunicacion_paciente_paciente FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);

CREATE TABLE historial_medico(
    id INT NOT NULL AUTO_INCREMENT,
    paciente_fk INT NOT NULL,
    descripcion LONGTEXT NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id),
    CONSTRAINT FK_historial_medico_paciente FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);

CREATE TABLE hospital(
    nit INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    CONSTRAINT PK_nit PRIMARY KEY(nit)
);

CREATE TABLE aviso(
    id INT  NOT NULL AUTO_INCREMENT,
    hospital_fk INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATETIME NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id),
    CONSTRAINT FK_aviso_hospital FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);

CREATE TABLE cuenta(
    id INT NOT NULL AUTO_INCREMENT,
    paciente_fk INT NOT NULL,
    hospital_fk INT NOT NULL,
    monto_total DOUBLE NOT NULL,
    fecha DATETIME NOT NULL,
    motivo TEXT NOT NULL,
    estado_Pago ENUM('Cancelado', 'Pendiente') NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id),
    CONSTRAINT FK_cuenta_paciente FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula),
    CONSTRAINT FK_cuenta_hospital FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);
CREATE INDEX monto_total ON cuenta(monto_total);

CREATE TABLE comunicacion_hospital(
    hospital_fk INT NOT NULL,
    tipo ENUM('Telefono', 'Celular', 'Correo electronico') NOT NULL,
    contacto VARCHAR(50) NOT NULL,
    CONSTRAINT UC_contacto_hospital UNIQUE (contacto),
    CONSTRAINT FK_comunicacion_hospital_hospital FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);

CREATE TABLE especialidad(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id)
);

CREATE TABLE doctor(
    id INT NOT NULL AUTO_INCREMENT,
    nombre_completo VARCHAR(50) NOT NULL,
    genero VARCHAR(20) NOT NULL,
    especialidad_fk INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    estado ENUM("Activo", "Suspendido", "Vacaciones", "Incapacitado", "Inactivo") NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id),
    CONSTRAINT FK_doctor_especialidad FOREIGN KEY (especialidad_fk) REFERENCES especialidad(id)
);
CREATE INDEX nombre_doctor ON doctor(nombre_completo);

CREATE TABLE comunicacion_doctor(
    doctor_fk INT NOT NULL,
    tipo ENUM('Telefono', 'Celular', 'Correo electronico') NOT NULL,
    contacto VARCHAR(50) NOT NULL,
    CONSTRAINT UP_contacto_doctor Unique (contacto),
    CONSTRAINT FK_comunicacion_doctor_doctor FOREIGN KEY (doctor_fk) REFERENCES doctor(id)
);

CREATE TABLE personal(
    hospital_fk INT NOT NULL,
    doctor_fk INT NOT NULL,
    CONSTRAINT FK_personal_hospital FOREIGN KEY (hospital_fk) REFERENCES hospital(nit),
    CONSTRAINT FK_personal_doctor FOREIGN KEY (doctor_fk) REFERENCES doctor(id)
);

CREATE TABLE poblacion(
    doctor_fk INT NOT NULL,
    paciente_fk INT NOT NULL,
    CONSTRAINT FK_poblacion_doctor FOREIGN KEY (doctor_fk) REFERENCES doctor(id),
    CONSTRAINT FK_poblacion_paciente FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);
