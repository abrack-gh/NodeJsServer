//Create a server...
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin', './routes/shop');

const application = express();

//Parser
application.use(bodyParser.urlencoded({extended: false}));

application.use(adminRoutes);

//Spin up server, and connect to routes.js module
application.listen(9000, 'localhost');


