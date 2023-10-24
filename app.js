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
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-items');


application.set('view engine', 'ejs');
// application.set('views', 'views');

application.use((req, res, next) => {
    User.findByPk(1).then(user => {
        req.user = user;
        next();
    }).catch(err => {
        console.log(err)
    })
})

//Parser
application.use(bodyParser.urlencoded({extended: false}));

application.use('/admin', adminRoutes);
application.use(shopRoutes);
application.use(express.static(path.join(__dirname, 'public')));

//SEND ERROR VIEW WITH 404 ERROR IN HEADER
application.use(errorController.getErrorPage);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize.sync(
    // {force: true}
)
    .then(result => {
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({firstName: 'A', lastName: 'B', emailAddress: 'a.b@gmail.com'});
        }
        return user;
    })
    .then(user => {
        // console.log(user);
        application.listen(9000);
    })
    .catch(err => {
        console.log(err);
    })

//Spin up server, and connect to routes.js module





