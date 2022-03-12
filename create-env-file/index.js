/* The .env file is a hidden file that is used to pass environment 
variables to your application. This file is secret, no one but you 
can access it, and it can be used to store data that you want to 
keep private or hidden. */ 

//If you are working locally, you will need the dotenv package
//npm install dotenv

require('dotenv').config() //need to add at top of the document

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    
    if(process.env.MESSAGE_STYLE == "uppercase") {
        res.send("env variable working")
    } else {
        res.send("env not working");
    }
})

app.listen(3000);