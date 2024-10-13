[TOC]

# Doctor

## Obtener todos los doctores

**Method** : `GET`

**URL** : `http://localhost:3000/doctor/v1/todos`

**Auth required** : `False`

### Success Responses

**Code** : `200 OK`

```
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

```
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
	"fecha_nacimiento": "1998-02-30",
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
    "insertId": 11,
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

