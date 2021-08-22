const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud_Audiovam_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.log('El erro de conexion es: ' +error);
        return
    }
    console.log('Se ha conectado a la BD MySQL')
})

module.exports = conexion;
