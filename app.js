//Create a server...
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const application = express();

//Parser
application.use(bodyParser.urlencoded({extended: false}));

application.use((req, res, next) => {
    res.status(404).send('<h1>404 - Page Not Found!</h1>');
})

application.use(adminRoutes);
application.use(shopRoutes);



//Spin up server, and connect to routes.js module
application.listen(9000, 'localhost');


