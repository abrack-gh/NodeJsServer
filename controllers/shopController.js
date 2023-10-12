const json = require('../data/products.json');
const Product = require("../models/product");

exports.getCart = (req, res, next) => {
    res.render('../views/shop/cart',
        {
            pageTitle: 'Your Cart',
            path: 'shop/cart',
            activeProduct: true,
            productCSS: true
        })
}

exports.getCheckout = (req, res, next) => {
    res.render('../views/shop/checkout',
        {
            pageTitle: 'Checkout',
            path: '/checkout',
            activeProduct: true,
            productCSS: true
        })
}

exports.getIndex = (req, res, next) => {
    res.render('../views/shop/index',
        {
            pageTitle: 'Shop - Home',
            path: '/',
            activeProduct: true,
            productCSS: true
        })
}

exports.getProductDetails = (req, res, next) => {
    res.render('../views/shop/product-details',
        {
            pageTitle: ' ',
            path: '/product-details',
            activeProduct: true,
            productCSS: true
        })
}

exports.getProduct = (req, res, next) => {
    res.render('../views/shop/shop',
        {
            pageTitle: 'Products',
            path: '/product-details',
            activeProduct: true,
            productCSS: true
        });
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {product: product, pageTitle: product.title, path: '/products'});
    });
};

exports.getShopData = (req, res, next) => {
    Product.fetchAll((products) => {

        res.render('shop/shop', {
            pageTitle: 'Shop',
            prods: products, path: '/',
            hasProducts: json != null,
            activeShop: true, productCSS: true
        });

    });
}


exports.getOrders = (req, res, next) => {
    Product.fetchAll((products) => {

        res.render('shop/orders', {
            pageTitle: 'Your Orders',
            prods: products, path: '/orders',
            activeShop: true, productCSS: true
        });

    });
}