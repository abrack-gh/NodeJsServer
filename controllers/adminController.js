const Product = require("../models/product");
const json = require("../data/products.json");


exports.getEditProducts = (req, res, next) => {
    res.render('../views/admin/edit-product',
        {
            pageTitle: 'Edit Product',
            path: 'admin/edit-product',
            activeProduct: true,
            productCSS: true
        })
}

exports.getShop = (req, res, next) => {
    Product.fetchAll((products) => {

        res.render('admin/shop', {
            pageTitle: 'Shop',
            prods: products, path: '/',
            hasProducts: json != null,
            activeShop: true, productCSS: true
        });

    });
}

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-products',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            activeProduct: true,
            productCSS: true
        });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/products');
}