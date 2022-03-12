//open toma una bandera como segundo argumento
//si la bandera es "w" el archivo se abre para escritura
//si el archivo no existe se crea un archivo vacio

const fs = require('fs');

const content = "Buenos dias mundo!!!"

fs.open("file.txt", "w", (err,file) => {
    if (err) throw err;    
    console.log("Saved");
})