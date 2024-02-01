/*Es un modulo que se utiliza para obtener informacion sobre el sistema operativo 
en el cual se ejecuta la aplicacion*/

//modulo que no esta disponible de forma global, necesita importarse
const os = require("os");

//mostrar so
console.log(os.type());

//Mostrar la carpeta principal del so
console.log(os.homedir());

//Segundos que ha estado ejecutandose el sistema
console.log(os.uptime());

//informacion del usuario
console.log(os.userInfo());


