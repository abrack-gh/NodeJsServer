const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');


const router = express.Router();

const products = [];

router.use;


//HTTP GET REQUEST => /admin/add
router.get('/add-product', (req, res, next) => {
    res.render('add-product.handlebars', {pageTitle: 'Add Product', path:'/admin/add-product'});
});

//Filters only for post requests
//HTTP POST REQUEST => /admin/product
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title, price: req.body.price, descr: req.body.descr});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
