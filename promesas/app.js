const promesaCumplida = true;
//Se crea una promesa con dos parametros, los cuales son dos funciones, la primera realiza cierta accion si la promesa tiene exito
//El segundo argumento realiza cierta operacion si la promesa NO tiene exito
const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve("Promesa cumplida");
        }
        else
        {
            reject("Error");
        }
    },3000);
});

const manejarPromesaCumplida= (valor)=>{
    console.log(valor);
};

const manejarPromesaRechazada= (razonRechazo)=>{
    console.log(razonRechazo);
};

//Cuando se le pasa un argumento a la funcion, maneja el exito de la promesa
//Cuando se le pasan dos, el seguno elemento maneja el error de la promesa 
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);


