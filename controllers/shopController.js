const json = require('../data/products.json');
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {
                const cartProductData = cart.products.find(
                    prod => prod.id === product.id
                );
                if (cartProductData) {
                    cartProducts.push({ productData: product, qty: cartProductData.qty });
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartProducts
            });
        });
    });
};


    exports.getCheckout = (req, res, next) => {
        res.render('../views/shop/checkout',
            {
                pageTitle: 'Checkout',
                path: '/checkout',
                activeProduct: true,
                productCSS: true
            })
    }

    exports.postCart = (req, res, next) => {
        const prodId = req.body.productId;
        Product.findById(prodId, (product) => {
            Cart.addProduct(prodId, product.price);
        })
        res.redirect('/cart');
    };

    exports.getIndex = (req, res, next) => {
        Product.findAll()
            .then((products) => {
                res.render('../views/shop/index',
                    {
                        prods: products,
                        pageTitle: 'Shop - Home',
                        path: '/'
                    })
            })
            .catch(err => (console.log(err)));
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
        Product.findByPk(prodId)
            .then((product) => {
            res.render('shop/product-detail',
                {
                    product: product,
                    pageTitle: product,
                    path: '/products'
                })
        })
                .catch(err => (console.log(err)));

    };

    exports.getShopData = (req, res, next) => {
        Product.findAll()
            .then((products) => {
                res.render('../views/shop/shop',
                    {
                        prods: products,
                        pageTitle: 'Shop - Home',
                        path: '/'
                    })
            })
            .catch(err => (console.log(err)));
    }


    exports.getOrders = (req, res, next) => {
        Product.fetchAll((products) => {

            res.render('shop/orders', {
                pageTitle: 'Your Orders',
                prods: products, path: '/orders',
                activeShop: true, productCSS: true
            });

        });

};

    exports.postCartDeleteProduct = (req, res, next) => {

        const prodId = req.body.productId;
        Product.findById(prodId, product => {
            Cart.deleteProduct(prodId, product.price);
            res.redirect('/cart');
        });

};