const miurl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

//Entrega el nombre del host
console.log(miurl.hostname);

//Entrega el nombre del camino
console.log(miurl.pathname);

//busca los parametros de la URL
console.log(miurl.searchParams);

//Obtener el valor de un parametro
console.log(miurl.searchParams.get('ordenar'));

