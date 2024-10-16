// conexion a database
const mysql = require('mysql2/promise');
class Conexion {
    constructor(){
        
    }
    get conexion(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'campus2023',
            password: "campus2023",
            port: 3306,
            database: 'hospital',
        }).then(res=>{
            return {status: 200, message:"Conexion establecida", data: res};
        }).catch (error=>{
            throw new Error(JSON.stringify({ status: 500, message: "Error en la conexion", data: error}));
        })
    }
}
module.exports = Conexion;

// let obj = new Conexion();
// obj.conexion().then(res =>{
//     console.log(res);
// }).catch (error=>{
//     let err = JSON.parse(error.message);
//     console.log(err);

// })