//reemplaza el archivo y contenido especificados si existen
//si no existe crea un archivo con el contenido especificado

const fs = require('fs');

const content = "Buenos dias sol!!!"

fs.writeFile('file.txt', content, (err) => {
    if (err) throw err;
    console.log("File saved");
})