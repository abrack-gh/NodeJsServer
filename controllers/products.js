const Product = require('../models/product')
const json = require('../data/products.json');

exports.getAddProduct = (req, res, next) => {
    res.render('add-products',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            activeProduct: true,
            productCSS: true
        });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.price, req.body.description);
    product.save();
    res.redirect('/');
}

exports.getShopData = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {pageTitle: 'Shop',
        prods: products, path:'/',
        hasProducts: json != null,
        activeShop: true, productCSS: true});
};

