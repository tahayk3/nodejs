//EventEmitter es una clase que permite la comunicacion entre componentes
//A partir de la clase, esta se instancia y creamos un objeto 
const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

//.on() es una propiedad que realiza una accion cuando ocurre cierto evento(cuando ocurre el evento, llama a una funcion ) 
//ESTE ES EL EMISOR
emisorProductos.on('compra', () => {
    console.log("Se realizo una compra");
});

//ESTE ES EL EMIT, cuando ocurre una compra, se manda a llamar al emisorProductos, la cual manda a llamar a otra funcion
emisorProductos.emit('compra');




