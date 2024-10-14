[TOC]

# Doctor

## Obtener todos los doctores

**Method** : `GET`

**URL** : `http://localhost:3000/doctor/v1/todos`

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "list of Doctors",
  "data": [
    {
      "id": 1,
      "nombre_completo": "Dr. José Martínez",
      "genero": "Masculino",
      "especialidad_fk": 1,
      "fecha_nacimiento": "1975-04-12T05:00:00.000Z",
      "estado": "Activo"
    },
    {
      "id": 2,
      "nombre_completo": "Dra. Laura Gutiérrez",
      "genero": "Femenino",
      "especialidad_fk": 2,
      "fecha_nacimiento": "1980-09-25T05:00:00.000Z",
      "estado": "Suspendido"
    },
	....
	]
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la tabla no existe en la base de datos.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener todos los doctores",
  "data": {
    "message": "Table 'hospital.docto' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "select * from docto",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.docto' doesn't exist"
  }
}
```



------



## Obtener un doctor por id

**Method** : `GET`

**URL** : `http://localhost:3000/doctor/v1/:id`
**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "informacion del doctor Dra. Carolina Salazar",
  "data": {
    "id": 6,
    "nombre_completo": "Dra. Carolina Salazar",
    "genero": "Femenino",
    "especialidad_fk": 6,
    "fecha_nacimiento": "1985-12-02T05:00:00.000Z",
    "estado": "Activo"
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Si se envia un id que no existe en la base de datos, se generara este errror. Por ejemplo, sen envió el id 66.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener la informacion del doctor 66",
  "data": {}
}
```





------





## Guardar la informacion del doctor

**Method** : `POST`

**URL** : `http://localhost:3000/doctor/v1`

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

body:

```json
{
	"nombre": "Pepito perez",
	"genero": "Masculino", /No hay una lista de generos
    "especialidad": 5, /Seleccione una especialidad en la base de datos
	"fecha_nacimiento": "1998-02-20",
	"estado": "Activo", /"Activo", "Suspendido", "Vacaciones", "Incapacitado", "Inactivo"
}
```



### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El usuario Pepito perez fue guardado exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 15,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la fecha a enviar no corresponde con el formato establecido.

```json
{
  "status": 500,
  "message": "Ocurrio un error al guardar la informacion del doctor Pepito perez",
  "data": {
    "message": "Incorrect date value: '1998-02-30' for column 'fecha_nacimiento' at row 1",
    "code": "ER_TRUNCATED_WRONG_VALUE",
    "errno": 1292,
    "sql": "INSERT INTO doctor (nombre_completo, genero, especialidad_fk, fecha_nacimiento, estado) VALUES ('Pepito perez','Masculino',5,'1998-02-30','Activo')",
    "sqlState": "22007",
    "sqlMessage": "Incorrect date value: '1998-02-30' for column 'fecha_nacimiento' at row 1"
  }
}
```



------



## Eliminar la informacion del doctor

**Method** : `DELETE`

**URL** : `http://localhost:3000/doctor/v1/:id`

**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El usuario 11 fue eliminado exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la fecha a enviar no corresponde con el formato establecido.

```json
{
  "status": 500,
  "message": "Ocurrio un error al eliminar el doctor 1323",
  "data": {}
}
```


------



# Aviso

## Obtener todos los avisos

**Method** : `GET`

**URL** : `http://localhost:3000/aviso/v1/todos`

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "lista de avisos",
  "data": [
    {
      "id": 1,
      "hospital_fk": 9001,
      "nombre": "Jornada de vacunación",
      "descripcion": "Vacunación gratuita para mayores de 60 años",
      "fecha": "2024-05-12T13:00:00.000Z"
    },
    {
      "id": 2,
      "hospital_fk": 9002,
      "nombre": "Nueva especialidad en cardiología",
      "descripcion": "Se inaugura la nueva unidad de cardiología",
      "fecha": "2024-03-15T15:00:00.000Z"
    },
	....
	]
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la tabla no existe en la base de datos.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener todos los avisos",
  "data": {
    "message": "Table 'hospital.avis' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "select * from avis",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.avis' doesn't exist"
  }
}
```



------



## Obtener un aviso por id

**Method** : `GET`

**URL** : `http://localhost:3000/aviso/v1/:id`
**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "informacion del aviso Donación de sangre",
  "data": {
    "id": 3,
    "hospital_fk": 9003,
    "nombre": "Donación de sangre",
    "descripcion": "Campaña de donación de sangre abierta al público",
    "fecha": "2024-07-22T14:00:00.000Z"
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Si se envia un id que no existe en la base de datos, se generara este errror. Por ejemplo, sen envió el id 11.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener la informacion del aviso 11",
  "data": {}
}
```





------





## Guardar la informacion del aviso

**Method** : `POST`

**URL** : `http://localhost:3000/aviso/v1`

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

body:

```json
{
  "hospital_fk": 9001,
  "nombre": "Campaña de donación",
  "descripcion": "Campaña de donación de sangre",
  "fecha": "2024-10-12T13:00:00.000Z"
}
```



### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El aviso Campaña de donación fue guardado exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 14,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q el aviso a enviar no corresponde con el formato establecido.

```json
{
  "status": 500,
  "message": "Ocurrio un error al guardar la informacion del aviso Campaña de donación",
  "error": {
    "message": "Unknown column 'hospital_f' in 'field list'",
    "code": "ER_BAD_FIELD_ERROR",
    "errno": 1054,
    "sql": "INSERT INTO aviso (hospital_f, nombre, descripcion, fecha) VALUES (9001,'Campaña de donación','Campaña de donación de sangre','2024-10-12 13:00:00')",
    "sqlState": "42S22",
    "sqlMessage": "Unknown column 'hospital_f' in 'field list'"
  }
}
```



------



## Eliminar la informacion del aviso

**Method** : `DELETE`

**URL** : `http://localhost:3000/aviso/v1/:id`

**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El aviso con id 10 fue eliminado exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la fecha a enviar no corresponde con el formato establecido.

```json
{
  "status": 404,
  "message": "El aviso con id 32 no fue encontrado."
}
```

# Cuenta

## Obtener todas las cuentas

**Method** : `GET`

**URL** : `http://localhost:3000/cuenta/v1/todos`

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "lista de cuentas",
  "data": [
    {
      "id": 1,
      "paciente_fk": 1001,
      "hospital_fk": 9001,
      "monto_total": 1500,
      "fecha": "2024-01-15T14:30:00.000Z",
      "motivo": "Cirugía de rodilla",
      "estado_Pago": "Cancelado"
    },
    {
      "id": 2,
      "paciente_fk": 1002,
      "hospital_fk": 9002,
      "monto_total": 500,
      "fecha": "2024-03-20T19:45:00.000Z",
      "motivo": "Consulta de neumología",
      "estado_Pago": "Pendiente"
    },
	....
	]
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la tabla no existe en la base de datos.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener todos las cuentas",
  "data": {
    "message": "Table 'hospital.cuent' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "select * from cuent",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.cuent' doesn't exist"
  }
}
```



------



## Obtener una Cuenta por id

**Method** : `GET`

**URL** : `http://localhost:3000/cuenta/v1/:id`
**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "informacion de la cuenta 1004",
  "data": {
    "id": 4,
    "paciente_fk": 1004,
    "hospital_fk": 9004,
    "monto_total": 800,
    "fecha": "2024-02-22T21:10:00.000Z",
    "motivo": "Tratamiento hipertensión",
    "estado_Pago": "Pendiente"
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Si se envia un id que no existe en la base de datos, se generara este errror. Por ejemplo, sen envió el id 11.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener la informacion del cuenta 43",
  "data": {}
}
```





------





## Guardar la informacion de la cuenta

**Method** : `POST`

**URL** : `http://localhost:3000/aviso/v1`

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

body:

```json
{
  "paciente_fk": 1001,
  "hospital_fk": 9001,
  "monto_total": 1500,
  "fecha": "2024-01-15 09:30:00",
  "motivo": "Reemplazo de cadera",
  "estado_Pago": "Cancelado"
}
```



### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "La cuenta 1001 fue guardada exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 15,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`



**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la cuenta a enviar no corresponde con el formato establecido.



```json
{
{
  "status": 500,
  "message": "Ocurrio un error al guardar la informacion de la cuenta ",
  "data": {
    "message": "Table 'hospital.cuent' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "INSERT INTO cuent (paciente_fk, hospital_fk, monto_total, fecha, motivo, estado_Pago) VALUES (1001,9001,1500,'2024-01-15 09:30:00','Reemplazo de cadera','Cancelado')",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.cuent' doesn't exist"
  }
}
```



------



## Eliminar la informacion de la cuenta

**Method** : `DELETE`

**URL** : `http://localhost:3000/cuenta/v1/:id`

**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "La cuenta 13 fue eliminada exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la fecha a enviar no corresponde con el formato establecido.

```json
{
  "status": 500,
  "message": "Ocurrio un error al eliminar la cuenta 33",
  "data": {}
}
```


------


# Hospital

## Obtener todos los Hospitales

**Method** : `GET`

**URL** : `http://localhost:3000/hospital/v1/todos`

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```
{
  "status": 200,
  "message": "lista de Hospitales",
  "data": [
    {
      "nit": 9001,
      "nombre": "Hospital Central",
      "direccion": "Calle 123 #45-67, Ciudad"
    },
    {
      "nit": 9002,
      "nombre": "Clínica San Rafael",
      "direccion": "Av. Principal #22-34, Ciudad"
    },
	....
	]
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la tabla no existe en la base de datos.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener todos los Hospitales",
  "data": {
    "message": "Table 'hospital.hopital' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "select * from hopital",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.hopital' doesn't exist"
  }
}
```



------



## Obtener un Hospital por nit

**Method** : `GET`

**URL** : `http://localhost:3000/hospital/v1/:id`
**URL Parameters** : `nit=[number]` El **id** es el identificador único asignado al Hospital.

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "informacion del Hospital Hospital Infantil",
  "data": {
    "nit": 9009,
    "nombre": "Hospital Infantil",
    "direccion": "Calle 5 #10-12, Ciudad"
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Si se envia un id que no existe en la base de datos, se generara este errror. Por ejemplo, sen envió el nit 90092.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener la informacion del Hospital 90092",
  "data": {}
}
```





------





## Guardar la informacion del hospital

**Method** : `POST`

**URL** : `http://localhost:3000/hospital/v1`

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

body:

```json
{
  "nit": 9066,
  "nombre": "Hospital Clarvelfield",
  "direccion": "Calle 123 #45-67, Ciudad"
}
```



### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El Hospital 9066 fue guardada exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`



**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por que el Hospital  a enviar no corresponde con el formato establecido.



```json
{
  "status": 500,
  "message": "Ocurrio un error al guardar la informacion del Hospital ",
  "data": {
    "message": "Table 'hospital.hospitl' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "INSERT INTO hospitl (nit, nombre, direccion) VALUES (9066,'Hospital Clarvelfield','Calle 123 #45-67, Ciudad')",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.hospitl' doesn't exist"
  }
}
```



------



## Eliminar la informacion del Hospital

**Method** : `DELETE`

**URL** : `http://localhost:3000/hospital/v1/:id`

**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El Hospital 9066 fue eliminado exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la fecha a enviar no corresponde con el formato establecido.

```json
{
  "status": 500,
  "message": "Ocurrio un error al eliminar el Hospital 90663",
  "data": {}
}
```


------


# Paciente

## Obtener todos los Pacientes

**Method** : `GET`

**URL** : `http://localhost:3000/paciente/v1/todos`

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```
{
  "status": 200,
  "message": "Lista de Pacientes",
  "data": [
    {
      "cedula": 1001,
      "nombre": "Juan",
      "apellido": "Pérez",
      "genero": "Masculino",
      "fecha_nacimiento": "1980-05-14T05:00:00.000Z",
      "edad": 44,
      "estado": "Activo"
    },
    {
      "cedula": 1002,
      "nombre": "Ana",
      "apellido": "García",
      "genero": "Femenino",
      "fecha_nacimiento": "1992-09-30T04:00:00.000Z",
      "edad": 32,
      "estado": "Inactivo"
    },
	....
	]
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la tabla no existe en la base de datos.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener todos los pacientes",
  "data": {
    "message": "Table 'hospital.paciene' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "select * from paciene",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.paciene' doesn't exist"
  }
}
```



------



## Obtener un Paciente por cedula

**Method** : `GET`

**URL** : `http://localhost:3000/paciente/v1/:id`
**URL Parameters** : `cedula=[number]` El **id** es el identificador único asignado al Hospital.

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```
{
  "status": 200,
  "message": "informacion del paciente Juan Pérez",
  "data": {
    "cedula": 1001,
    "nombre": "Juan",
    "apellido": "Pérez",
    "genero": "Masculino",
    "fecha_nacimiento": "1980-05-14T05:00:00.000Z",
    "edad": 44,
    "estado": "Activo"
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Si se envia un id que no existe en la base de datos, se generara este errror. Por ejemplo, sen envió el id 11.

```json
{
  "status": 500,
  "message": "Ocurrio un error al obtener la informacion del paciente 134893",
  "data": {}
}
```





------





## Guardar la informacion del Paciente

**Method** : `POST`

**URL** : `http://localhost:3000/paciente/v1`

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

body:

```json
{
  "cedula": 9086,
  "nombre": "Tom",
  "apellido": "Misaky",
  "genero": "Masculino",
  "fecha_nacimiento": "1980-05-14",
  "edad": 19,
  "estado": "Activo"
}
```



### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El usuario Tom fue guardado exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`



**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por que el Paciente  a enviar no corresponde con el formato establecido.



```json
{
  "status": 500,
  "message": "Ocurrio un error al guardar la informacion del doctor Tom",
  "data": {
    "message": "Table 'hospital.aciente' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sql": "INSERT INTO aciente (cedula, nombre, apellido, genero, fecha_nacimiento, edad, estado) VALUES (9086,'Tom','Misaky','Masculino','1980-05-14',19,'Activo')",
    "sqlState": "42S02",
    "sqlMessage": "Table 'hospital.aciente' doesn't exist"
  }
}
```



------



## Eliminar la informacion del Paciente

**Method** : `DELETE`

**URL** : `http://localhost:3000/hospital/v1/:id`

**URL Parameters** : `id=[number]` El **id** es el identificador único asignado al doctor.

**Auth required** : `False`
**Headers**:

```json
{ "Content-Type": "application/json"}
```

### Success Responses

**Code** : `200 OK`

```json
{
  "status": 200,
  "message": "El Hospital 9066 fue eliminado exitosamente",
  "data": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

**Code** : `500 Internal Server Error`

**Nota:** Los errores pueden ocurrir si el backend realiza incorrectamente una consulta, lo que puede provocar que la informacion de la datos varie, en este ejemplo el error ocurre por q la fecha a enviar no corresponde con el formato establecido.

```json
{
  "status": 500,
  "message": "Ocurrio un error al eliminar el paciente 90864",
  "data": {}
}
```
