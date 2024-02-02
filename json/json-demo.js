/*
Lectura de un archivo json 

const foto = require("./curso.json");
console.log(foto.numLikes);
*/

//Pasar un objeto a un json 
let infoCurso = {
    "title":"Publicacion foto de perfil",
    "numVistas": 123,
    "numLikes":122,
    " hashtags": ["foto", "nueva foto de perfil"],
    "esPublico": true
}

//stringify, convierte un objeto a un cadena de caracteres de tipo json 
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);

//Cadena de caracteres a un objeto(se usae JSON.parse)
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
