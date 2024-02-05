const http = require('http');
const {infoCursos} = require('./cursos');

const servidor = http.createServer((req,res)=>{
    //se obtiene el metodo de la solicitud
    const {method} = req;

    //en base al metodo solicitado, se mandan a llamar a diferentes funciones
    switch(method){
        case 'GET':
            return manejarSolicitudGet(req,res);
        case 'POST':
            return manejarSolicitudPost(req,res);
        default:
            console.log('El metodo no puede ser procesado por el servidor: '+method);
    }
});

//se maneja el metodo GET
function manejarSolicitudGet(req,res){
    //Se obtiene el patch para procesar la peticion http
    const path = req.url;
    if(path === '/'){
        //asignamos un codigo para la respuesta http
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y api creada con node.js');
    }
    else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    }
    else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion));
    }
    else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.matematicas));
    }
    else{
        res.statusCode = 404;
        return res.end('El recurso no existe');
    }
}
//se maneja el metodo POST
function manejarSolicitudPost(req, res ){
    const patch = req.url;
    if(patch === '/cursos/programacion'){
        let cuerpo = '';
        //el evento viene predefinido con data
        req.on('data', contenido =>{
            //se convierte el contenido en una cadena de caracteres
            cuerpo += contenido.toString();
        });

        req.on('end', ()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);


            //Convertir texto en objeto en JS
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.statusCode = 201;
            res.end('El servidor recibio una solicitud POST para /cursos/progrmacion');
        });
    }
}

//Se crea el servidor escuchando en el puerto 3000
const puerto = 3000;
servidor.listen( puerto,() =>{
    console.log('El servidor esta escuchando, localhost:'+ puerto);
});