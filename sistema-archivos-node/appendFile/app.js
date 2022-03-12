// appendfile agrega contenido especificado al final de un archivo. 
//Si elarchivo no existe se creará

const fs = require('fs');

fs.appendFile('newfile.txt', 'Hello content', (err) => {
    if (err) throw err;
    console.log("saved"); 
})