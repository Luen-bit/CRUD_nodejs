const conexion = require('../database/db');

// ejemplo guardar registro
exports.save = (req,res)=>{
    const Nombre = req.body.Nombre;
    const Rol = req.body.Rol;
    conexion.query("INSERT INTO users SET ?", {Nombre:Nombre, Rol:Rol},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }

    })
}



//ejemplo actualizar registro
exports.update = (req,res)=>{
    const id = req.body.id;
    const user = req.body.Nombre;
    const rol = req.body.Rol;
    console.log(id+user+rol);
    conexion.query('UPDATE users SET ? WHERE ID =?', [{Nombre:user, Rol:rol}, id], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}


exports.save_aparato = (req,res)=>{
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Alias = req.body.Alias;
    const Telefono = req.body.Telefono;
    const Fecha = req.body.Fecha;
    const Aparato = req.body.Aparato;
    const Marca = req.body.Marca;
    const Falla = req.body.Falla;
    const Observaciones = req.body.Observaciones;
    const Estado = req.body.Estado;
    const Notas = req.body.Notas;
    conexion.query("INSERT INTO aparatos SET ?", {nombre_cliente:Nombre, apellido_cliente:Apellido
    ,alias:Alias,telefono_cliente:Telefono,fecha_recepcion:Fecha,aparato:Aparato,marca:Marca,
    falla:Falla,observaciones:Observaciones,estado:Estado,notas:Notas},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registro_aparatos');
        }

    })
}

exports.update_aparato = (req,res)=>{
    const id = req.body.id_cliente;
    const Nombre = req.body.nombre_cliente;
    const Apellido = req.body.apellido_cliente;
    const Alias = req.body.alias;
    const Telefono = req.body.telefono_cliente;
    const Fecha = req.body.fecha_recepcion;
    const Aparato = req.body.Aparato;
    const Marca = req.body.marca;
    const Falla = req.body.falla;
    const Observaciones = req.body.observaciones;
    const Estado = req.body.estado;
    const Notas = req.body.notas;
    console.log(id+user+rol);
    conexion.query('UPDATE aparato SET ? WHERE id_cliente =?', [{nombre_cliente:Nombre, apellido_cliente:Apellido,
                    alias:Alias,telefono_cliente:Telefono,fecha_recepcion:Fecha,aparato:Aparato,
                marca:Marca,falla:Falla,observaciones:Observaciones,estado:Estado,notas:Notas}, id], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registro_aparatos');
        }
    })
}
