//Contiene funciones que ejecutan codigo luego de un periodo de tiempo
//Se utiliza para simular/crear operaciones asincronas

/*setTimeout() ejecuta codigo luego de un numero especifico de milisegundos
setTimeout(function_a_llamar, retrasaro, argumento/s);
*/

function mostrarTema(tema){
    console.log('El lenguaje de programacion es: '+ tema);
}
setTimeout(mostrarTema, 5000, "php");

function suma(num1,num2){
    sum = num1+num2;
    console.log("La suma es: "+ sum);
}
setTimeout(suma, 10000, 5,5);





//setImmediate() ejecuta codigo asincrono en la proxima iteracion del ciclo de eventos(lo mas pronto posible)
//se ejecuta despues de un codigo sincrono
//setTimeout(function_a_llamar, argumento/s);
setImmediate(mostrarTema, "c++");

//setInterval() para ejecutar codigo un numero infinito de veces con un rastro especifico de milisegundos
//setInterval(function_a_llamar, intervalo, argumento/s);
setInterval(suma,5000,5,5);









