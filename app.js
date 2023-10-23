//Create a server...
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const application = express();
const errorController = require('./controllers/errorController');
const sequelize = require('./util/database');

application.set('view engine', 'ejs');
// application.set('views', 'views');

//Parser
application.use(bodyParser.urlencoded({extended: false}));

application.use('/admin', adminRoutes);
application.use(shopRoutes);
application.use(express.static(path.join(__dirname, 'public')));

//SEND ERROR VIEW WITH 404 ERROR IN HEADER
application.use(errorController.getErrorPage);

sequelize.sync()
    .then(result => {
    // console.log(result)
    application.listen(9000, 'localhost');
    })
    .catch(err => {
        console.log(err);
    })

//Spin up server, and connect to routes.js module





