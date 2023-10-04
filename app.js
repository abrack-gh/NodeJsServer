//Create a server...
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');


const application = express();

//Parser
application.use(bodyParser.urlencoded({extended: false}));

application.use('/admin', adminRoutes);
application.use(shopRoutes);
application.use(express.static(path.join(__dirname, 'public')));

//SEND ERROR VIEW WITH 404 ERROR IN HEADER
application.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'./', 'views', 'error.html'));
})



//Spin up server, and connect to routes.js module
application.listen(9000, 'localhost');


