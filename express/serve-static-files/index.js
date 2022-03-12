const express = require('express')
const app = express();

app.use(express.static('./public'));

app.get('/', (req,res) => {
    /*The res.sendFile() function basically transfers the file at the given path and
    it sets the Content-Type response HTTP header field based on the filename extension. */
    res.sendFile(__dirname + "/views/index.html");
})

app.listen('3000', () => {
    console.log("Server running on port http://localhost:3000")
    console.log(__dirname)
})