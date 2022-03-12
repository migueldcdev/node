//npm install express

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Server running...")
})

app.listen(3000, () => {
    console.log("App listening at http://localhost:3000")
})