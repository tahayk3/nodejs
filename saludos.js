//Un modulo no es mas que un archivo .js
//Un modulo puede tener varias funciones
function saludar(nombre){
    return 'Hola '+ nombre;
}

function holamundo(){
    return "Hola mundo";
}

//la forma de exportar modulos es por medio del objeto: module.exports
module.exports.saludar = saludar
module.exports.holamundo = holamundo

/*
Otra forma de exportar los modulos es con la sintaxis de un objeto
module.exports = {
    saludar: saludar,
    holamundo: holamundo
}
*/