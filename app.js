//Create a server...
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const application = express();


application.set('view engine', 'ejs');
// application.set('views', 'views');

//Parser
application.use(bodyParser.urlencoded({extended: false}));

application.use('/admin', adminData.routes);
application.use(shopRoutes);
application.use(express.static(path.join(__dirname, 'public')));

//SEND ERROR VIEW WITH 404 ERROR IN HEADER
application.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})



//Spin up server, and connect to routes.js module
application.listen(9000, 'localhost');


