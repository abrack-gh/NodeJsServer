const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const adminData = require('./admin');

const router = express.Router();

router.use;

module.exports = router;

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {pageTitle: 'Shop',prods: products, path:'/', hasProducts: products.length > 0, activeShop: true, productCSS: true});
});