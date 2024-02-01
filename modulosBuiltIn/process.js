//Prove informacion sobre el proceso de Node.js que se esta ejecutando
//Tambien puede tener cierto control sobre el proceso

//objeto completo
console.log(process);

//Muestra el ambiente de ejecucion
console.log(process.env);

//acceder a los argumentos que se envian al ejecutar un modulo
//node modulosBuiltIn/process.js 5 =>>> console.log(process.argv[2]);

console.log(process.argv[2]);

//Se puede conocer el uso de la memoria que se esta utilizando 
console.log(process.memoryUsage());