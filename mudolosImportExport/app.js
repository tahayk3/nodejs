/*para no exportar todo el objeto, se puede utilizar la sintaxis de desestructuracion
  const {holamundo} = require(./saludos.js);
*/

//para importar modulos se debe utilizar require y la ubicacion del archivo .js
const  saludo = require("./saludos.js");

console.log(saludo.saludar("xd"));
console.log(saludo.holamundo());
