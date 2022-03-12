const expres = require('express');
const app = expres();

//a middleware functions takes 3 args (req,res,next)
/* use:
    -execute code
    -makes changes on req res objects
    -end the req res cycle
    -call next middleware
*/

const middlewareLogger = (req, res, next) => {
    console.log(req.method);
    next();
}

app.use(middlewareLogger)



//Middleware can be mounted at a specific route using app.METHOD(path, middlewareFunction). 
const middlewareDate = (req, res, next) => {
    res.send(Date())
}

app.use('/date', middlewareDate)



//Middleware can also be chained inside route definition.




app.listen(3000, () => {
    console.log('http://localhost:3000')
});