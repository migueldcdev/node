//npm install express
//npm install mariadb

const express = require('express');
const app = express();
const db = require('mariadb/callback');

const pool = db.createPool({
    host: 'raspberrypi',
    user:'admin',
    password: 'abc123',
    database:'app'
})


app.get('/', (req, res) => {
    pool.query('SELECT * FROM todo;', (err,result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.listen(3000, () => {
    console.log('App listening at http://localhost:3000')
})