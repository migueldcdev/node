const express = require('express')
const app = express()

// Middleware can also be chained inside route definition.

app.use('/middleware', (req, res, next) => {
    req.time = new Date().toString(); // here could go an async func       
    next()
}, (req, res) => {
    res.json({"time" : req.time})    
})


app.listen(3000, () => {
    console.log('http://localhost:3000/middleware')
    console.log(new Date().toString())
})