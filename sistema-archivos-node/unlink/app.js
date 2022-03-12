//sirve para eliminar un archivo

const fs = require('fs');

fs.unlink("nombre.ext", (err) => {
    if (err) throw err;
    console.log("File deleted");
})