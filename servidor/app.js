//utilizar require para incluir el modulo http
const http = require('http');

//crear un objeto servidor
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'}); //si la respuesta del servidor se muestra como html debe incluir encabezado
    res.write("<h1>Server running...<h1>"); // escribir respuesta al cliente
    res.end();//fin de la respuesta
}).listen(3000);