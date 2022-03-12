const express = require('express')

const app = express()

app.get('/api', (req,res) => {
    res.json({"message":"Hello"})
})

app.listen(3000, () => {
    console.log("Api running on http://localhost:3000/api")
})