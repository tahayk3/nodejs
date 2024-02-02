//Modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos
//Se pueden hacer operaciones de: leer, modificar, copiar, eliminar, cambiar nombre
//Se puede trabajar con archivos y carpetas
//Todos los motodos que este modulo proporciona, son asincronos

/*  Se puede escoger versiones sincronas de estos metodos agregando --Sync-- a sus nombres 
    fs.rename();
    fs.renameSync();
*/
const fs = require('fs');

//leer archivos
fs.readFile('modulosBuiltIn/index.html', 'utf-8', (err, contenido) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    console.log(contenido);
  });

//Actualizar el nombre de un archivo 
fs.rename('modulosBuiltIn/main.html', 'modulosBuiltIn/index.html',(err) =>{
  if(err){
    throw err;
  }
  console.log("Nombre cambiado exitosamente");
});

//Agregar contenido al final de un archivo
fs.appendFile('modulosBuiltIn/index.html', '<h3>Sub titulo</h3>',(err) =>{
  if(err){
    throw err;
  }
  console.log("Archivo actualizado");
});

//Reemplazar todo el contenido del archivo
fs.writeFile('index.html', 'Contenido nuevo',(err)=>{
  if(err){
    throw err;
  }
  console.log("Contenido actualizado");
});

//eliminar archivos
fs.unlink('index.html', (err)=>{
  if(err){
    throw err;
  }
  console.log("Eliminado");
});




