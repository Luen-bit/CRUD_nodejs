const express = require ('express');
const router = express.Router();

const conexion = require('./database/db')



//ruta raiz ejemplo select all 
router.get('/', (req,res)=>{
    
   conexion.query('SELECT * FROM aparatos' ,(error,results)=>{
       if(error){
           throw error;
       }else{
            res.render('index', {results:results});
       }
   })
});

//ruta crear registros
router.get('/create',(req,res)=>{
    res.render('create')
})
//termina ruta crear registros

//Ruta para editar
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    conexion.query("SELECT * FROM aparatos WHERE ID=?", [id], (error,results)=>{
        if (error){
            console.log(error);
        }else{  
            res.render('edit', {user : results[0]});
        }
    })
})

// ejemplo ruta pra eliminar

router.get('/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query("DELETE FROM aparatos WHERE id = ?", [id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
})
// ejmplo ruta guardar y actualizar
const crud =require('./controllers/crud');
const { render } = require('ejs');
router.post("/save", crud.save);
router.post("/update",crud.update);
router.post("/save_aparato",crud.save_aparato);
router.post("/update_aparato",crud.save_aparato);


//exportar router
module.exports = router;



//ruta registro aparatos

router.get('/registro_aparatos', (req,res)=>{
    
    conexion.query('SELECT * FROM aparatos' ,(error,results)=>{
        if(error){
            throw error;
        }else{
             res.render('registro_aparatos', {results:results});
        }
    })
 });

 //ruta editar aparatos

 router.get('/edit_aparato/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    conexion.query("SELECT * FROM aparatos WHERE id=?", [id], (error,results)=>{
        if (error){
            console.log(error);
        }else{  
            res.render('edit_aparato', {aparato : results[0]});
        }
    })
})

//ruta crear nuevo aparato

router.get('/create_aparato',(req,res)=>{
    res.render('create_aparato')
})


// ruta eliminar registro aparato

router.get('/delete_aparato/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query("DELETE FROM aparatos WHERE id = ?", [id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registro_aparatos');
        }
    });
})