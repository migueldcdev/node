const http = require('http');

//crear un objeto servidor
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'}); 
    res.write("<h1>Server running...<h1>");
    res.end();
}).listen(3000);