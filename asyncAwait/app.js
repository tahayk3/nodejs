//Esta funcion retorna una promesa
function ordenarProducto(producto){
    //El programa espera que la funcion se completa y luego la retorna
    //si hay exito en el proceso, se manda a la llamar a la funcion resolve
    //si hay fracaso en el proceso, se manda a llamar a la funcion reject 
    return new Promise((resolve, reject)=>{
        console.log("Ordenando:" +producto);
        //Se añade un setTimeout, para simular que la promesa esta tardando cierto tiempo
        setTimeout(()=>{
            if(producto == 'taza'){
                resolve('Ordenando una taza');
            }
            else{
                reject('Este producto no esta disponible');
            }
        },3000);
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve =>{
        console.log("procesando respuesta.. xd");
        console.log("La respuesta fue"+ respuesta);
        setTimeout(() => {
            resolve("Gracias por tu compra");
        }, 4000);
    });
}

/*Las promesas al ser asincromas, puede que una termine antes que otra
En este caso las dos funciones de arriba, para que tenga sentido, primero  
se debe ordenar un producto y luego se proceso dicho pedido.

Para asegurar el orden correcto de estas funciones asincronas, se usa algo llamado 
encadenamiento
*/

//se retorna la segunda funcion asincrona que se quiere ejecutar
//Esto se conoce como encadenar promesas o chaining promises
/*
ordenarProducto('taza')
        .then(respuesta =>{
        console.log("respuesta recibida");
        console.log(respuesta);
        return procesarPedido(respuesta); 
    })
        .then(respuestaProcesada =>{
        console.log(respuestaProcesada);
    })

        .catch(error =>{
        console.log(error);
    });
*/

//EN LUGAR DE USAR EL PROCEDIMIENTO DE ARRIBA, se puede simplificar utilizando async y await
//con async y await se puede escribir codigo sincrono, como si fuera asincrono 
async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }
    catch(error){
        console.log("Se genero un error: "+error);
    }
}

realizarPedido('taza');



 