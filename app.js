//Create a server...
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const application = express();

//Parser
application.use(bodyParser.urlencoded({extended: false}));

application.use('/', (req, res, next) => {
    console.log("This middleware always runs!");
    next();
});

application.use('/add', (req, res, next) => {
    console.log("Second middleware!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//Filters only for post requests
application.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

application.use('/', (req, res, next) => {
    console.log("Third middleware!");
    res.send('<h1>Hello!</h1>');
});

//Spin up server, and connect to routes.js module
application.listen(9000, 'localhost');


