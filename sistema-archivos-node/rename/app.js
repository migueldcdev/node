//cambia el nombre del archivo especificado

const fs = require('fs');

fs.rename("nombre", "nuevonombre", (err) => {
    if (err) throw err;
    console.log("File renamed");
})