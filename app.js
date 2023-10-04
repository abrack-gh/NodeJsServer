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

application.use((req, res, next) => {
    res.status(400).sendFile(path.join(__dirname,'./', 'views', 'error.html'));
})



//Spin up server, and connect to routes.js module
application.listen(9000, 'localhost');


