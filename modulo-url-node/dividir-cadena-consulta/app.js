
const http = require('http');
const url = require('url');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'}); 
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
}).listen(3000);

// http://localhost:3000/?year=2022&month=febrero

// 2022 febrero