//Se importa el modulo require
const http = require("http");

//Se crea el servidor
const servidor = http.createServer((req,res)=>{
    console.log("===> solicitud");
    console.log(req.url);
    console.log(req.method);
    res.end("Estas en "+ req.url);

});

const puerto = 3000;

//Con estas linas de codigo el servidor escucha por medio del puerto que asignamos
servidor.listen(puerto,()=>{
    console.log("El servidor esta encendido y escuchando en el puerto: "+ puerto);
});