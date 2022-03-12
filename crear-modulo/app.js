const http = require('http');
const dt = require('./module');

http.createServer((req,res) => {    
    res.write("The date and time are currently: " + dt.dateTime());
    res.end();
}).listen(3000)